"use client"

import { useEffect, useRef } from "react"
import { DiagramaProceso } from "@/components/DiagramaProceso"
import { pasos } from "@/content/sitio"

export function Proceso() {
  const pila = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const raiz = pila.current
    if (!raiz) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const tarjetas = [
      ...raiz.querySelectorAll<HTMLElement>("[data-proceso-tarjeta]"),
    ]
    const cajas = [...raiz.querySelectorAll<HTMLElement>(".proceso-paso")]
    let marco = 0

    const actualizar = () => {
      marco = 0
      tarjetas.forEach((tarjeta, indice) => {
        const siguiente = cajas[indice + 1]
        if (!siguiente) {
          tarjeta.style.transform = "scale(1)"
          return
        }
        const actual = cajas[indice].getBoundingClientRect()
        const viene = siguiente.getBoundingClientRect()
        const progreso =
          1 - Math.min(Math.max((viene.top - actual.top) / actual.height, 0), 1)
        tarjeta.style.transform = `scale(${1 - progreso * 0.08})`
      })
    }

    const enScroll = () => {
      if (marco) return
      marco = window.requestAnimationFrame(actualizar)
    }

    actualizar()
    window.addEventListener("scroll", enScroll, { passive: true })
    window.addEventListener("resize", enScroll)
    return () => {
      window.removeEventListener("scroll", enScroll)
      window.removeEventListener("resize", enScroll)
      if (marco) window.cancelAnimationFrame(marco)
    }
  }, [])

  return (
    <div className="proceso" ref={pila}>
      {pasos.map((paso, indice) => (
        <article
          key={paso.numero}
          className="proceso-paso"
          style={{ zIndex: indice + 1 }}
        >
          <div className="proceso-tarjeta" data-proceso-tarjeta>
            <div className="proceso-dibujo">
              <DiagramaProceso numero={paso.numero} />
            </div>
            <div className="proceso-copia">
              <p className="proceso-num">Fase {paso.numero}</p>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
