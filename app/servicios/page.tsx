import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { pasos, servicios } from "@/content/sitio";

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
            <p className="service-num">{servicio.numero}</p>
            <h2>{servicio.titulo}</h2>
            <p className="service-copy">
              <strong>{servicio.bajada}</strong> {servicio.texto}
            </p>
            <ul className="ticks">
              {servicio.puntos.map((punto) => (
                <li key={punto}>{punto}</li>
              ))}
            </ul>
            <Link className="btn btn-primary" href={servicio.enlace}>
              {servicio.cta}
            </Link>
          </article>
        ))}
      </div>

      <section
        className="wrap section"
        id="como-trabajamos"
        aria-labelledby="pasos-titulo"
      >
        <div className="section-head">
          <h2 id="pasos-titulo">Cómo encargáis la web</h2>
        </div>
        <div className="step-grid">
          {pasos.map((paso) => (
            <article key={paso.numero} className="step">
              <p className="step-num">{paso.numero}</p>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </article>
          ))}
        </div>
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
