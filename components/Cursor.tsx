"use client"

import { useEffect, useRef } from "react"

export function Cursor() {
  const punto = useRef<HTMLDivElement>(null)
  const anillo = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fino = window.matchMedia("(pointer: fine)").matches
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fino) return

    document.documentElement.classList.add("con-cursor")
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let ax = x
    let ay = y
    let marco = 0

    function mover(evento: MouseEvent) {
      x = evento.clientX
      y = evento.clientY
      if (punto.current) {
        punto.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
      if (reducido && anillo.current) {
        anillo.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
    }

    function seguir() {
      ax += (x - ax) * 0.18
      ay += (y - ay) * 0.18
      if (anillo.current) {
        anillo.current.style.transform = `translate3d(${ax}px, ${ay}px, 0) translate(-50%, -50%)`
      }
      marco = requestAnimationFrame(seguir)
    }

    function alPasar(evento: MouseEvent) {
      const destino = evento.target
      if (!(destino instanceof Element)) return
      const activo = destino.closest("a, button, summary, input, textarea, label, select")
      anillo.current?.classList.toggle("cursor-anillo-activo", Boolean(activo))
    }

    window.addEventListener("mousemove", mover)
    window.addEventListener("mouseover", alPasar)
    if (!reducido) marco = requestAnimationFrame(seguir)

    return () => {
      document.documentElement.classList.remove("con-cursor")
      window.removeEventListener("mousemove", mover)
      window.removeEventListener("mouseover", alPasar)
      cancelAnimationFrame(marco)
    }
  }, [])

  return (
    <div className="cursor-capa" aria-hidden="true">
      <div ref={anillo} className="cursor-anillo">
        <span className="cursor-anillo-forma" />
      </div>
      <div ref={punto} className="cursor-punto" />
    </div>
  )
}
