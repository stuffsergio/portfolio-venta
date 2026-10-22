import type { Metadata } from "next";
import Link from "next/link";
import { SocioCard } from "@/components/SocioCard";
import { sitio, socios } from "@/content/sitio";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "Dos socios en Málaga: uno cierra el encargo con el negocio y el otro diseña y programa la web.",
};

export default function EstudioPage() {
  return (
    <>
      <header className="wrap page-head">
        <p className="kicker">El estudio</p>
        <h1>Dos oficios, un encargo.</h1>
        <p className="lead">
          {sitio.nombre} trabaja con negocios de {sitio.localidad}. Uno traduce
          lo que el negocio necesita. El otro lo diseña y lo programa.
        </p>
      </header>
      <section className="wrap section">
        <div className="partner-grid">
          {socios.map((socio) => (
            <SocioCard key={socio.id} socio={socio} />
          ))}
        </div>
        <p className="case-nav">
          <Link href="/contacto">Escribir al estudio</Link>
          <Link href="/proyectos">Ver los proyectos</Link>
        </p>
      </section>
    </>
  );
}
