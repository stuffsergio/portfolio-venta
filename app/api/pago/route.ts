import Stripe from "stripe"
import { sitio } from "@/content/sitio"

export async function POST() {
  const clave = process.env.STRIPE_SECRET_KEY
  const precio = process.env.STRIPE_PRICE_ID

  if (!clave || !precio) {
    return Response.json(
      { error: "El cobro todavía no está conectado." },
      { status: 503 },
    )
  }

  const stripe = new Stripe(clave)
  const sesion = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: precio, quantity: 1 }],
    success_url: `${sitio.url}/pago?estado=ok`,
    cancel_url: `${sitio.url}/pago?estado=cancelado`,
    metadata: {
      concepto: "Pago inicial de la página web",
    },
    payment_intent_data: {
      description: "Pago inicial de la página web",
    },
  })

  if (!sesion.url) {
    return Response.json(
      { error: "Stripe no ha devuelto la página de pago." },
      { status: 502 },
    )
  }

  return Response.json({ url: sesion.url })
}
