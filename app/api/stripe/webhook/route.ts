import Stripe from "stripe"
import { correoPagoInicial } from "@/lib/correoPago"
import { CorreoSinConectar, enviarCorreo } from "@/lib/enviarCorreo"

export async function POST(request: Request) {
  const clave = process.env.STRIPE_SECRET_KEY
  const secreto = process.env.STRIPE_WEBHOOK_SECRET

  if (!clave || !secreto) {
    return Response.json(
      { error: "El aviso de Stripe todavía no está conectado." },
      { status: 503 },
    )
  }

  const firma = request.headers.get("stripe-signature")
  if (!firma) {
    return Response.json({ error: "Falta la firma." }, { status: 400 })
  }

  const stripe = new Stripe(clave)
  let evento: Stripe.Event
  try {
    evento = stripe.webhooks.constructEvent(await request.text(), firma, secreto)
  } catch {
    return Response.json({ error: "Firma no válida." }, { status: 400 })
  }

  if (!esPagoConfirmado(evento)) {
    return Response.json({ recibido: true })
  }

  const sesion = evento.data.object as Stripe.Checkout.Session
  if (sesion.metadata?.correoEnviado === "1") {
    return Response.json({ recibido: true })
  }

  const destino = sesion.customer_details?.email ?? sesion.customer_email
  if (!destino) {
    return Response.json({ recibido: true, correo: "sin-destino" })
  }

  const completa = await stripe.checkout.sessions.retrieve(sesion.id, {
    expand: ["line_items"],
  })
  const linea = completa.line_items?.data[0]
  const correo = correoPagoInicial({
    nombre: completa.customer_details?.name ?? null,
    producto: linea?.description ?? sesion.metadata?.concepto ?? "Pago inicial de la página web",
    importe: dinero(completa.amount_total, completa.currency),
  })

  try {
    await enviarCorreo({ to: destino, ...correo })
  } catch (error) {
    if (error instanceof CorreoSinConectar) {
      return Response.json({ error: error.message }, { status: 503 })
    }
    return Response.json({ error: "No se ha podido enviar el correo." }, { status: 502 })
  }

  await stripe.checkout.sessions.update(sesion.id, {
    metadata: { correoEnviado: "1" },
  })

  return Response.json({ recibido: true })
}

function esPagoConfirmado(evento: Stripe.Event) {
  if (evento.type === "checkout.session.async_payment_succeeded") return true
  if (evento.type !== "checkout.session.completed") return false
  const sesion = evento.data.object as Stripe.Checkout.Session
  return sesion.payment_status === "paid"
}

function dinero(cantidad: number | null, moneda: string | null) {
  if (cantidad == null) return ""
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: (moneda ?? "eur").toUpperCase(),
  }).format(cantidad / 100)
}
