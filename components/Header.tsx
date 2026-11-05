import Link from "next/link"
import { sitio } from "@/content/sitio"

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link href="/" className="logo-name">
          {sitio.nombre}
        </Link>
        <Link href="/contacto" className="header-contacto">
          Contacto
        </Link>
      </div>
    </header>
  )
}
