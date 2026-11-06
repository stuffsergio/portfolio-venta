import { sitio } from "@/content/sitio"

export type DatosPago = {
  nombre: string | null
  producto: string
  importe: string
}

const TITULO_PASOS = "Cosas que puedes hacer ahora mismo para adelantar trabajo!"

export function correoPagoInicial(datos: DatosPago) {
  const saludo = datos.nombre ? `Hola, ${datos.nombre}.` : "Hola."
  const producto = datos.producto || "Pago inicial de la página web"
  const importe = datos.importe || "el importe acordado"
  const correo = sitio.correoEstudio

  const text = [
    saludo,
    "",
    `Hemos recibido tu pago en la cuenta de ${sitio.nombre}.`,
    "",
    "Qué has adquirido",
    "Pago inicial de la página web de tu negocio.",
    `Concepto del cobro: ${producto}.`,
    `Importe: ${importe}.`,
    "Este pago reserva las fechas y pone en marcha el diseño y la programación. El resto se abona al publicar, cuando la web está en el aire y la dirección está lista.",
    "",
    TITULO_PASOS,
    "",
    "Puedes dejarnos preparadas las dos cuentas donde vivirá la página. Cuando empecemos, no hay que esperar a los accesos.",
    `El correo que tienes que invitar en las dos es ${correo}.`,
    "",
    "1. Crea una cuenta en GitHub",
    "GitHub es donde se guarda el código de la página.",
    "- Entra en https://github.com/signup",
    "- Escribe tu correo, una contraseña y un nombre de usuario.",
    "- Abre el correo de GitHub y pulsa el enlace para confirmar la cuenta.",
    "- Inicia sesión. Arriba a la derecha pulsa + y elige New repository.",
    "- Ponle el nombre de tu negocio, en minúsculas y con guiones si hace falta. Por ejemplo, panaderia-lopez.",
    "- Márcalo como Private y pulsa Create repository.",
    "- Dentro de ese repositorio, abre Settings.",
    "- En el menú de la izquierda entra en Collaborators.",
    "- Pulsa Add people.",
    `- Escribe ${correo} y envía la invitación.`,
    "- GitHub te pedirá la contraseña de tu cuenta para confirmarla.",
    "",
    "2. Crea una cuenta en Vercel",
    "Vercel es donde se publica la página para que tenga una dirección en internet.",
    "- Entra en https://vercel.com/signup",
    "- Elige Continue with GitHub y acepta el acceso a la cuenta que acabas de crear.",
    "- Arriba a la izquierda abre tu nombre y entra en Settings.",
    "- Entra en Members.",
    "- Si Vercel te pide un equipo para poder invitar, crea uno con el nombre de tu negocio. El plan Hobby basta para este paso.",
    `- Pulsa Invite, escribe ${correo} y elige el rol Member.`,
    "- Envía la invitación.",
    "",
    "Cuando las dos invitaciones estén enviadas, no tienes que hacer nada más. Nosotros las aceptamos y seguimos con la página.",
    "Si un paso se atasca, responde a este correo y lo vemos juntos.",
    "",
    sitio.nombre,
  ].join("\n")

  const html = `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:32px 20px;background:#ffffff;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;">
    <div style="max-width:560px;margin:0 auto;">
      <p style="margin:0 0 16px;">${escapar(saludo)}</p>
      <p style="margin:0 0 16px;">Hemos recibido tu pago en la cuenta de ${escapar(sitio.nombre)}.</p>
      <h1 style="margin:28px 0 8px;font-size:22px;font-weight:700;">Qué has adquirido</h1>
      <p style="margin:0 0 8px;">Pago inicial de la página web de tu negocio.</p>
      <p style="margin:0 0 8px;">Concepto del cobro: ${escapar(producto)}.</p>
      <p style="margin:0 0 8px;">Importe: ${escapar(importe)}.</p>
      <p style="margin:0 0 16px;">Este pago reserva las fechas y pone en marcha el diseño y la programación. El resto se abona al publicar, cuando la web está en el aire y la dirección está lista.</p>
      <h2 style="margin:32px 0 8px;font-size:22px;font-weight:700;">${TITULO_PASOS}</h2>
      <p style="margin:0 0 8px;">Puedes dejarnos preparadas las dos cuentas donde vivirá la página. Cuando empecemos, no hay que esperar a los accesos.</p>
      <p style="margin:0 0 20px;">El correo que tienes que invitar en las dos es <strong>${escapar(correo)}</strong>.</p>
      <h3 style="margin:24px 0 8px;font-size:18px;">1. Crea una cuenta en GitHub</h3>
      <p style="margin:0 0 8px;">GitHub es donde se guarda el código de la página.</p>
      <ol style="margin:0 0 20px;padding-left:20px;">
        <li>Entra en <a href="https://github.com/signup">https://github.com/signup</a>.</li>
        <li>Escribe tu correo, una contraseña y un nombre de usuario.</li>
        <li>Abre el correo de GitHub y pulsa el enlace para confirmar la cuenta.</li>
        <li>Inicia sesión. Arriba a la derecha pulsa + y elige New repository.</li>
        <li>Ponle el nombre de tu negocio, en minúsculas y con guiones si hace falta. Por ejemplo, panaderia-lopez.</li>
        <li>Márcalo como Private y pulsa Create repository.</li>
        <li>Dentro de ese repositorio, abre Settings.</li>
        <li>En el menú de la izquierda entra en Collaborators.</li>
        <li>Pulsa Add people.</li>
        <li>Escribe <strong>${escapar(correo)}</strong> y envía la invitación.</li>
        <li>GitHub te pedirá la contraseña de tu cuenta para confirmarla.</li>
      </ol>
      <h3 style="margin:24px 0 8px;font-size:18px;">2. Crea una cuenta en Vercel</h3>
      <p style="margin:0 0 8px;">Vercel es donde se publica la página para que tenga una dirección en internet.</p>
      <ol style="margin:0 0 20px;padding-left:20px;">
        <li>Entra en <a href="https://vercel.com/signup">https://vercel.com/signup</a>.</li>
        <li>Elige Continue with GitHub y acepta el acceso a la cuenta que acabas de crear.</li>
        <li>Arriba a la izquierda abre tu nombre y entra en Settings.</li>
        <li>Entra en Members.</li>
        <li>Si Vercel te pide un equipo para poder invitar, crea uno con el nombre de tu negocio. El plan Hobby basta para este paso.</li>
        <li>Pulsa Invite, escribe <strong>${escapar(correo)}</strong> y elige el rol Member.</li>
        <li>Envía la invitación.</li>
      </ol>
      <p style="margin:0 0 8px;">Cuando las dos invitaciones estén enviadas, no tienes que hacer nada más. Nosotros las aceptamos y seguimos con la página.</p>
      <p style="margin:0 0 24px;">Si un paso se atasca, responde a este correo y lo vemos juntos.</p>
      <p style="margin:0;">${escapar(sitio.nombre)}</p>
    </div>
  </body>
</html>`

  return {
    subject: `Hemos recibido el pago inicial de tu página web`,
    text,
    html,
  }
}

function escapar(valor: string) {
  return valor
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}
