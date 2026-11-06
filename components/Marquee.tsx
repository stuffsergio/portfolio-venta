"use client"

import Link from "next/link"
import type { Proyecto } from "@/content/proyectos"

export function Marquee({ proyectos }: { proyectos: Proyecto[] }) {
  const cinta = [...proyectos, ...proyectos]

  return (
    <div className="marquee">
      <div className="marquee-pista">
        {cinta.map((proyecto, indice) => {
          const nombre = proyecto.cliente?.nombre ?? proyecto.titulo
          return (
            <Link
              key={`${proyecto.slug}-${indice}`}
              href={`/proyectos/${proyecto.slug}`}
              className="marquee-item"
            >
              <span className="marquee-marco">
                {proyecto.imagenes.length >= 4 ? (
                  <span className="marquee-grid">
                    {proyecto.imagenes.slice(0, 4).map((src) => (
                      <img key={src} src={src} alt="" />
                    ))}
                  </span>
                ) : proyecto.imagenes[0] ? (
                  <img src={proyecto.imagenes[0]} alt="" />
                ) : (
                  <span className="marquee-vacio">{proyecto.sector}</span>
                )}
                <span className="marquee-ver" aria-hidden="true">
                  Ver {nombre}
                </span>
              </span>
              <span className="marquee-nombre">{nombre}</span>
            </Link>
          )
        })}
      </div>
      <span className="marquee-lado marquee-lado-izq" aria-hidden="true" />
      <span className="marquee-lado marquee-lado-der" aria-hidden="true" />
    </div>
  )
}
