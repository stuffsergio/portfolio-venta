import { sitio } from "@/content/sitio"
import { enlaceWhatsapp } from "@/lib/whatsapp"

function enlaceIncrustado(url: string) {
  try {
    const destino = new URL(url)
    if (destino.hostname === "cal.com" || destino.hostname.endsWith(".cal.com")) {
      destino.searchParams.set("embed", "true")
      destino.searchParams.set("theme", "light")
    }
    return destino.toString()
  } catch {
    return url
  }
}

export function Agenda() {
  const url = sitio.agendaUrl

  return (
    <section className="wrap section" id="llamada" aria-labelledby="llamada-titulo">
      <div className="agenda">
        <div>
          <p className="kicker">20 minutos</p>
          <h2 id="llamada-titulo">Agenda una llamada</h2>
          <p className="lead">
            Vemos el negocio y si os encaja una web de presencia o ya una
            aplicación. Sin compromiso.
          </p>
          <ul className="ticks">
            <li>Elegís el hueco en el calendario.</li>
            <li>La llamada es por vídeo, con quien hace el trabajo.</li>
            <li>Salís con el siguiente paso, no con una presentación.</li>
          </ul>
        </div>
        <div className="agenda-marco">
          {url ? (
            <iframe
              src={enlaceIncrustado(url)}
              title="Elegir hora para la llamada"
              loading="lazy"
            />
          ) : (
            <div className="agenda-espera">
              <p>
                El calendario se abre aquí. Mientras lo conectamos, dejad el
                teléfono y os proponemos hora.
              </p>
              <a
                className="btn btn-primary"
                href={enlaceWhatsapp(sitio.mensajeLlamada)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir hora por WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
