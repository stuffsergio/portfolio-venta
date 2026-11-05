import Link from "next/link"
import { sitio } from "@/content/sitio"
import { enlaceWhatsapp } from "@/lib/whatsapp"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">{sitio.nombre}</p>
          <p className="footer-place">
            {sitio.localidad}, {sitio.pais}
          </p>
          <p className="footer-note">
            Páginas web para negocios locales.
          </p>
        </div>
        <div className="footer-links">
          <a href={`tel:${sitio.telefonoE164}`}>{sitio.telefonoVisible}</a>
          <a
            href={enlaceWhatsapp(sitio.mensajeWhatsapp)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <Link href="/contacto">Contacto</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/privacidad">Privacidad</Link>
        </div>
      </div>
    </footer>
  )
}
