import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { proyectos } from "@/content/proyectos";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Notte Club, Caseo Events, Chiringuito Mauri y casos de muestra de webs para negocios locales.",
};

export default function ProyectosPage() {
  return (
    <>
      <header className="wrap page-head">
        <p className="kicker">Proyectos</p>
        <h1>El trabajo, contado por sector.</h1>
        <p className="lead">
          Notte Club, Caseo Events y Chiringuito Mauri se pueden visitar. El resto son muestras del tipo
          de página para un negocio local, todavía sin nombre de cliente.
        </p>
      </header>
      <section className="wrap section">
        <p className="notice">
          Los marcados como muestra ilustran una web de presencia. Todavía no
          llevan nombre de cliente.
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
