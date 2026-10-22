import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { proyectos } from "@/content/proyectos";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos de webs de presencia y aplicaciones a medida para negocios locales. El nombre del cliente se publica con permiso.",
};

export default function ProyectosPage() {
  return (
    <>
      <header className="wrap page-head">
        <p className="kicker">Proyectos</p>
        <h1>El trabajo, contado por sector.</h1>
        <p className="lead">
          Cada ficha dice el problema, lo que se programó y, si lo hay, el
          resultado. El nombre, el logo y el enlace del cliente tienen su sitio
          para cuando haya permiso.
        </p>
      </header>
      <section className="wrap section">
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
    </>
  );
}
