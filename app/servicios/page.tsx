import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { Proceso } from "@/components/Proceso";
import { servicios } from "@/content/sitio";

export const metadata: Metadata = {
  title: "Servicios",
  description: "La página web que un negocio de Málaga enseña en Google Maps.",
};

export default function ServiciosPage() {
  return (
    <>
      <header className="wrap page-head">
        <p className="kicker">Servicios</p>
        <h1>La página del negocio.</h1>
        <p className="lead">
          Una web para quien ya os ha encontrado en Google Maps.
        </p>
      </header>

      <div className="wrap stack section">
        {servicios.map((servicio) => (
          <article key={servicio.id} className="service-block" id={servicio.id}>
            <h2>{servicio.titulo}</h2>
            <p className="service-copy">{servicio.bajada}</p>
            <ul className="ticks">
              {servicio.puntos.map((punto) => (
                <li key={punto}>{punto}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section
        className="wrap section"
        id="como-trabajamos"
        aria-labelledby="pasos-titulo"
      >
        <div className="section-head">
          <h2 id="pasos-titulo">Cómo es el proceso</h2>
        </div>
        <Proceso />
      </section>

      <section className="wrap section" id="preguntas" aria-labelledby="faq-titulo">
        <div className="section-head">
          <h2 id="faq-titulo">Preguntas frecuentes</h2>
        </div>
        <FaqList />
      </section>
    </>
  );
}
