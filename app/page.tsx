import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { FichaPreview } from "@/components/FichaPreview";
import { Icono } from "@/components/Icono";
import { Presupuesto } from "@/components/Presupuesto";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SocioCard } from "@/components/SocioCard";
import { proyectos } from "@/content/proyectos";
import { incluye, sitio, socios } from "@/content/sitio";
import { enlaceWhatsapp } from "@/lib/whatsapp";

export default function Home() {
  return (
    <>
      <section className="wrap hero enter">
        <div>
          <p className="kicker">{sitio.localidad}</p>
          <h1>La web que tu negocio enseña en Google Maps.</h1>
          <p className="lead">
            La programamos para la ficha y para el móvil: llamada, WhatsApp,
            horarios, servicios y cómo llegar.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={enlaceWhatsapp(sitio.mensajeWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
            <Link className="btn btn-ghost" href="/presupuesto">
              Pedir presupuesto
            </Link>
          </div>
        </div>
        <FichaPreview />
      </section>

      <Reveal>
        <section className="wrap section" aria-labelledby="incluye-titulo">
          <div className="section-head">
            <h2 id="incluye-titulo">Lo que lleva la página</h2>
            <p className="lead">
              Pensada para quien ya os ha encontrado en Google y quiere saber si
              sois el negocio que busca.
            </p>
          </div>
          <div className="include-grid">
            {incluye.map((item) => (
              <article key={item.titulo} className="include-item">
                <Icono nombre={item.icono} />
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="wrap section" aria-labelledby="proyectos-titulo">
          <div className="section-head">
            <h2 id="proyectos-titulo">Proyectos</h2>
            <p className="lead">
              Así contamos un encargo: sector, problema y lo que se programó. El
              nombre del cliente entra cuando haya permiso.
            </p>
          </div>
          <p className="notice">
            Estos casos son de muestra. Los sustituimos por los encargos reales
            en cuanto se puedan publicar.
          </p>
          <div className="project-grid">
            {proyectos.map((proyecto) => (
              <ProjectCard key={proyecto.slug} proyecto={proyecto} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          className="wrap section"
          id="presupuesto"
          aria-labelledby="presupuesto-titulo"
        >
          <div className="section-head">
            <h2 id="presupuesto-titulo">Presupuesto</h2>
            <p className="lead">
              Eliges el encargo y el mensaje sale escrito. El importe se
              confirma por escrito antes de empezar.
            </p>
          </div>
          <Presupuesto />
        </section>
      </Reveal>

      <Reveal>
        <section className="wrap section" aria-labelledby="estudio-titulo">
          <div className="section-head">
            <h2 id="estudio-titulo">Quienes hacen el trabajo</h2>
            <p className="lead">
              Un estudio de dos personas en {sitio.localidad}. Habláis con quien
              cierra el encargo y con quien lo programa.
            </p>
          </div>
          <div className="partner-grid">
            {socios.map((socio) => (
              <SocioCard key={socio.id} socio={socio} compacto />
            ))}
          </div>
          <p className="case-nav">
            <Link href="/estudio">Conocer el estudio</Link>
            <Link href="/servicios#preguntas">Preguntas frecuentes</Link>
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="wrap">
          <div className="cta-band">
            <div>
              <h2>Contadnos el negocio.</h2>
              <p>
                Vemos si os encaja una web de presencia o si ya toca una
                aplicación. La conversación es corta.
              </p>
            </div>
            <Link className="btn btn-primary" href="/contacto">
              Ir al contacto
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="wrap section" aria-labelledby="faq-home">
          <div className="section-head">
            <h2 id="faq-home">Antes de escribir</h2>
          </div>
          <FaqList />
        </section>
      </Reveal>
    </>
  );
}
