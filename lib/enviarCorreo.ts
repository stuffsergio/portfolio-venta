import nodemailer from "nodemailer"
import { sitio } from "@/content/sitio"

export class CorreoSinConectar extends Error {
  constructor() {
    super("El correo todavía no está conectado.")
    this.name = "CorreoSinConectar"
  }
}

export async function enviarCorreo(mensaje: {
  to: string
  subject: string
  text: string
  html: string
}) {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!user || !pass) throw new CorreoSinConectar()

  const port = Number(process.env.SMTP_PORT ?? 465)
  const transporte = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  await transporte.sendMail({
    from: process.env.EMAIL_FROM ?? `${sitio.nombre} <${user}>`,
    replyTo: sitio.correoEstudio,
    to: mensaje.to,
    subject: mensaje.subject,
    text: mensaje.text,
    html: mensaje.html,
  })
}
