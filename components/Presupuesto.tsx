"use client"

import { useState, type FormEvent } from "react"
import {
  condicionesPresupuesto,
  extrasPresupuesto,
  lineasPresupuesto,
} from "@/content/sitio"
import { enlaceWhatsapp } from "@/lib/whatsapp"

type Tipo = (typeof lineasPresupuesto)[number]["id"]

function esTipo(valor: string): valor is Tipo {
  return lineasPresupuesto.some((linea) => linea.id === valor)
}

export function Presupuesto({ tipoInicial = "web" }: { tipoInicial?: string }) {
  const [tipo, setTipo] = useState<Tipo>(esTipo(tipoInicial) ? tipoInicial : "web")
  const [marcados, setMarcados] = useState<string[]>([])
  const [enlace, setEnlace] = useState<string | null>(null)
  const [aviso, setAviso] = useState<string | null>(null)

  const linea = lineasPresupuesto.find((item) => item.id === tipo) ?? lineasPresupuesto[0]
  const extras = extrasPresupuesto.filter((extra) => extra.tipo === tipo)
  const elegidos = extras.filter((extra) => marcados.includes(extra.id))

  function cambiarTipo(siguiente: Tipo) {
    setTipo(siguiente)
    setMarcados([])
  }

  function alternar(id: string) {
    setMarcados((actual) =>
      actual.includes(id) ? actual.filter((item) => item !== id) : [...actual, id],
    )
  }

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const datos = new FormData(evento.currentTarget)
    const nombre = String(datos.get("nombre") ?? "").trim()
    const negocio = String(datos.get("negocio") ?? "").trim()
    const telefono = String(datos.get("telefono") ?? "").trim()
    const texto = [
      `Hola, soy ${nombre}, de ${negocio}.`,
      `Mi teléfono es ${telefono}.`,
      `Quiero presupuesto de: ${linea.titulo}.`,
      elegidos.length > 0
        ? `Además: ${elegidos.map((extra) => extra.label).join(", ")}.`
        : "",
      `Plazo orientativo que he visto: ${linea.plazo}.`,
    ]
      .filter((parte) => parte.length > 0)
      .join(" ")
    const url = enlaceWhatsapp(texto)
    const ventana = window.open(url, "_blank", "noopener,noreferrer")
    setEnlace(url)
    setAviso(
      ventana
        ? "Se ha abierto WhatsApp con el presupuesto pedido."
        : "El navegador ha bloqueado la ventana. Abre el enlace de aquí abajo.",
    )
  }

  return (
    <div className="presupuesto">
      <div className="presupuesto-tipos">
        {lineasPresupuesto.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === tipo ? "tipo tipo-activo" : "tipo"}
            aria-pressed={item.id === tipo}
            onClick={() => cambiarTipo(item.id)}
          >
            <span className="tipo-plazo">{item.plazo}</span>
            <span className="tipo-titulo">{item.titulo}</span>
            <span className="tipo-texto">{item.texto}</span>
          </button>
        ))}
      </div>

      <form className="form presupuesto-form" onSubmit={enviar}>
        <fieldset className="extras">
          <legend>Qué más entra en este encargo</legend>
          {extras.map((extra) => (
            <label key={extra.id} className="check">
              <input
                type="checkbox"
                checked={marcados.includes(extra.id)}
                onChange={() => alternar(extra.id)}
              />
              <span>{extra.label}</span>
            </label>
          ))}
        </fieldset>

        <div className="field">
          <label htmlFor="presupuesto-nombre">Nombre</label>
          <input id="presupuesto-nombre" name="nombre" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="presupuesto-negocio">Negocio</label>
          <input
            id="presupuesto-negocio"
            name="negocio"
            required
            autoComplete="organization"
          />
        </div>
        <div className="field">
          <label htmlFor="presupuesto-telefono">Teléfono</label>
          <input
            id="presupuesto-telefono"
            name="telefono"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
          />
        </div>

        <div className="resumen">
          <p className="kicker">Así sale el mensaje</p>
          <p>
            {linea.titulo}. Plazo orientativo: {linea.plazo}.
            {elegidos.length > 0
              ? ` Además: ${elegidos.map((extra) => extra.label).join(", ")}.`
              : " Sin extras marcados."}
          </p>
        </div>

        <button type="submit" className="btn btn-primary">
          Pedir este presupuesto
        </button>
        <p className="form-nota">
          El mensaje lleva el encargo elegido. Esta página no guarda el
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

      <ol className="condiciones">
        {condicionesPresupuesto.map((condicion, indice) => (
          <li key={condicion.titulo}>
            <span>0{indice + 1}</span>
            <strong>{condicion.titulo}</strong>
            <p>{condicion.texto}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
