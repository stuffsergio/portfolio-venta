"use client"

import { useEffect, useState } from "react"

export function Visor({
  imagenes,
  titulo,
}: {
  imagenes: string[]
  titulo: string
}) {
  const [indice, setIndice] = useState(0)
  const [pausa, setPausa] = useState(false)
  const varias = imagenes.length > 1

  useEffect(() => {
    if (!varias || pausa) return
    const reloj = window.setInterval(() => {
      setIndice((actual) => (actual + 1) % imagenes.length)
    }, 2800)
    return () => window.clearInterval(reloj)
  }, [imagenes.length, pausa, varias])

  if (imagenes.length === 0) return null

  return (
    <div
      className="visor"
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
    >
      {imagenes.map((src, posicion) => (
        <img
          key={src}
          src={src}
          alt={posicion === indice ? titulo : ""}
          className={posicion === indice ? "visor-on" : ""}
        />
      ))}
      {varias ? (
        <p className="visor-cuenta">
          {indice + 1} / {imagenes.length}
          {pausa ? " · en pausa" : ""}
        </p>
      ) : null}
    </div>
  )
}
