"use client"

import { useState } from "react"

export function BotonPago() {
  const [aviso, setAviso] = useState<string | null>(null)
  const [ocupado, setOcupado] = useState(false)

  async function pagar() {
    setOcupado(true)
    setAviso(null)
    try {
      const respuesta = await fetch("/api/pago", { method: "POST" })
      const datos = (await respuesta.json()) as { url?: string; error?: string }
      if (!respuesta.ok || !datos.url) {
        setAviso(datos.error ?? "No se ha podido abrir el pago.")
        return
      }
      window.location.href = datos.url
    } catch {
      setAviso("No se ha podido abrir el pago.")
    } finally {
      setOcupado(false)
    }
  }

  return (
    <div className="pago-accion">
      <button type="button" className="enlace-texto" onClick={pagar} disabled={ocupado}>
        {ocupado ? "Abriendo Stripe…" : "Pagar"}
      </button>
      {aviso ? <p role="status">{aviso}</p> : null}
    </div>
  )
}
