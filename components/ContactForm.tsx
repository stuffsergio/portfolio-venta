"use client"

import { useState, type FormEvent } from "react"
import { enlaceWhatsapp, mensajeEncargo } from "@/lib/whatsapp"

export function ContactForm({
  necesidadInicial = "",
}: {
  necesidadInicial?: string
}) {
  const [necesidad, setNecesidad] = useState(necesidadInicial)
  const [enlace, setEnlace] = useState<string | null>(null)
  const [aviso, setAviso] = useState<string | null>(null)

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const formulario = new FormData(evento.currentTarget)
    const texto = mensajeEncargo({
      nombre: String(formulario.get("nombre") ?? ""),
      negocio: String(formulario.get("negocio") ?? ""),
      telefono: String(formulario.get("telefono") ?? ""),
      necesidad,
    })
    const url = enlaceWhatsapp(texto)
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
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          required
          placeholder="Ana García"
        />
      </div>
      <div className="field">
        <label htmlFor="negocio">Negocio</label>
        <input
          id="negocio"
          name="negocio"
          type="text"
          autoComplete="organization"
          required
          placeholder="Taller en Málaga"
        />
      </div>
      <div className="field">
        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          placeholder="600 123 123"
        />
      </div>
      <div className="field">
        <label htmlFor="necesidad">Qué necesitáis</label>
        <textarea
          id="necesidad"
          name="necesidad"
          required
          rows={5}
          value={necesidad}
          onChange={(evento) => setNecesidad(evento.target.value)}
          placeholder="Quiero una web para la ficha de Google, con horarios y WhatsApp."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Abrir WhatsApp con el mensaje
      </button>
      <p className="form-nota">
        Al enviar se abre WhatsApp con tu mensaje. Esta página no guarda el
        formulario en un servidor.
      </p>
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
