"use client"

import { useState, type FormEvent } from "react"
import { enlaceWhatsapp } from "@/lib/whatsapp"

export function ContactForm({ mensajeInicial = "" }: { mensajeInicial?: string }) {
  const [mensaje, setMensaje] = useState(mensajeInicial)
  const [aviso, setAviso] = useState<string | null>(null)
  const [enlace, setEnlace] = useState<string | null>(null)

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const datos = new FormData(evento.currentTarget)
    const nombre = String(datos.get("nombre") ?? "").trim()
    const telefono = String(datos.get("telefono") ?? "").trim()
    const correo = String(datos.get("correo") ?? "").trim()
    const texto = mensaje.trim()

    if (!telefono && !correo) {
      setAviso("Deja un teléfono o un correo.")
      setEnlace(null)
      return
    }

    const partes = [
      `Hola, soy ${nombre}.`,
      telefono ? `Mi teléfono es ${telefono}.` : "",
      correo ? `Mi correo es ${correo}.` : "",
      texto,
    ].filter((parte) => parte.length > 0)
    const url = enlaceWhatsapp(partes.join(" "))
    const ventana = window.open(url, "_blank", "noopener,noreferrer")
    setEnlace(url)
    setAviso(
      ventana
        ? "Se ha abierto WhatsApp con tu mensaje."
        : "El navegador ha bloqueado la ventana. Abre el enlace de aquí abajo.",
    )
  }

  return (
    <form className="form" onSubmit={enviar}>
      <div className="field">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="telefono">Teléfono</label>
        <input id="telefono" name="telefono" type="tel" inputMode="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="correo">Correo</label>
        <input id="correo" name="correo" type="email" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          value={mensaje}
          onChange={(evento) => setMensaje(evento.target.value)}
        />
      </div>
      <button type="submit" className="enlace-texto">
        Enviar
      </button>
      <p className="form-nota">Hace falta el teléfono o el correo. El mensaje es opcional.</p>
      {aviso ? (
        <p className="form-aviso" role="status">
          {aviso}{" "}
          {enlace ? (
            <a href={enlace} target="_blank" rel="noopener noreferrer">
              Abrir WhatsApp
            </a>
          ) : null}
        </p>
      ) : null}
    </form>
  )
}
