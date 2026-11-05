"use client"

import Link from "next/link"
import type { Proyecto } from "@/content/proyectos"

export function Marquee({ proyectos }: { proyectos: Proyecto[] }) {
  const cinta = [...proyectos, ...proyectos]

  return (
    <div className="marquee">
      <div className="marquee-pista">
        {cinta.map((proyecto, indice) => (
          <Link
            key={`${proyecto.slug}-${indice}`}
            href={`/proyectos/${proyecto.slug}`}
            className="marquee-item"
          >
            {proyecto.imagenes[0] ? (
              <img src={proyecto.imagenes[0]} alt="" />
            ) : (
              <span className="marquee-vacio">{proyecto.sector}</span>
            )}
            <span className="marquee-nombre">
              {proyecto.cliente?.nombre ?? proyecto.titulo}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
