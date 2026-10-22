import type { SVGAttributes } from "react"
import type { IconoNombre } from "@/content/sitio"

const trazo: SVGAttributes<SVGSVGElement> = {
  width: 28,
  height: 28,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
}

export function Icono({ nombre }: { nombre: IconoNombre }) {
  switch (nombre) {
    case "movil":
      return (
        <svg {...trazo} className="icono icono-movil">
          <rect x="10" y="4" width="12" height="24" rx="2.5" />
          <path d="M14 25.5h4" />
        </svg>
      )
    case "chat":
      return (
        <svg {...trazo} className="icono icono-chat">
          <path d="M7 8.5h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H14l-5 4v-4H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3z" />
        </svg>
      )
    case "reloj":
      return (
        <svg {...trazo} className="icono icono-reloj">
          <circle cx="16" cy="16" r="10" />
          <path className="icono-aguja" d="M16 11v6l4 2" />
        </svg>
      )
    case "pin":
      return (
        <svg {...trazo} className="icono icono-pin">
          <path d="M16 27s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13z" />
          <circle className="icono-pin-centro" cx="16" cy="14" r="2.4" />
        </svg>
      )
    case "texto":
      return (
        <svg {...trazo} className="icono icono-texto">
          <path d="M8 8h16" />
          <path d="M8 14h16" />
          <path d="M8 20h10" />
        </svg>
      )
    case "enlace":
      return (
        <svg {...trazo} className="icono icono-enlace">
          <path className="icono-eslabon" d="M14 18l-2 2a4 4 0 0 1-6-6l3-3a4 4 0 0 1 6 0" />
          <path className="icono-eslabon" d="M18 14l2-2a4 4 0 0 1 6 6l-3 3a4 4 0 0 1-6 0" />
        </svg>
      )
  }
}
