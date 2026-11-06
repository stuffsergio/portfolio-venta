import Stripe from "stripe"
import { sitio } from "@/content/sitio"

function lineaDeCobro(
  precio: string,
): Stripe.Checkout.SessionCreateParams.LineItem | null {
  const valor = precio.trim()

  if (valor.startsWith("price_")) {
    return { price: valor, quantity: 1 }
  }

  const euros = Number(valor.replace(",", "."))
  if (!Number.isFinite(euros) || euros <= 0) return null

  return {
    quantity: 1,
    price_data: {
      currency: "eur",
      unit_amount: Math.round(euros * 100),
      product_data: {
        name: "Pago inicial de la página web",
      },
    },
  }
}

export async function POST() {
  const clave = process.env.STRIPE_SECRET_KEY
  const precio = process.env.STRIPE_PRICE_ID

  if (!clave || !precio) {
    return Response.json(
      { error: "El cobro todavía no está conectado." },
      { status: 503 },
    )
  }

  const linea = lineaDeCobro(precio)
  if (!linea) {
    return Response.json(
      { error: "El importe del pago no es válido." },
      { status: 500 },
    )
  }

  const stripe = new Stripe(clave)

  try {
    const sesion = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [linea],
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
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      return Response.json(
        { error: "Stripe no ha podido abrir el pago." },
        { status: 502 },
      )
    }

    throw error
  }
}
