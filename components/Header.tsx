"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { navegacion, sitio } from "@/content/sitio"
import { enlaceWhatsapp } from "@/lib/whatsapp"

function rutaActiva(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const pathname = usePathname()
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    function alPulsar(evento: KeyboardEvent) {
      if (evento.key === "Escape") setAbierto(false)
    }
    window.addEventListener("keydown", alPulsar)
    return () => window.removeEventListener("keydown", alPulsar)
  }, [])

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link href="/" className="logo" onClick={() => setAbierto(false)}>
          <span className="logo-mark" aria-hidden="true" />
          <span>
            <span className="logo-name">{sitio.nombre}</span>
            <span className="logo-place">{sitio.localidad}</span>
          </span>
        </Link>

        <div className="header-actions">
          <a className="header-call" href={`tel:${sitio.telefonoE164}`}>
            <span className="header-call-label">Llamar</span>
            <span className="header-call-num">{sitio.telefonoVisible}</span>
          </a>
          <Link className="header-quote" href="/presupuesto">
            Presupuesto
          </Link>
          <a
            className="header-wa"
            href={enlaceWhatsapp(sitio.mensajeWhatsapp)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={abierto}
            aria-controls="navegacion"
            onClick={() => setAbierto((valor) => !valor)}
          >
            {abierto ? "Cerrar" : "Menú"}
          </button>
        </div>

        <nav
          id="navegacion"
          className={abierto ? "nav nav-abierta" : "nav"}
          aria-label="Secciones"
        >
          {navegacion.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                rutaActiva(pathname, item.href)
                  ? "nav-link nav-link-activa"
                  : "nav-link"
              }
              aria-current={rutaActiva(pathname, item.href) ? "page" : undefined}
              onClick={() => setAbierto(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
