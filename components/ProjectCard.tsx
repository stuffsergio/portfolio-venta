import Link from "next/link"
import { etiquetaTipo, type Proyecto } from "@/content/proyectos"

export function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link href={`/proyectos/${proyecto.slug}`} className="project-card">
      <span className="project-panel" aria-hidden="true">
        <span>{proyecto.sector}</span>
      </span>
      <span className="project-tags">
        <span className="tag">{proyecto.sector}</span>
        <span className="tag">{etiquetaTipo(proyecto.tipo)}</span>
        {proyecto.ejemplo ? <span className="tag tag-muestra">Muestra</span> : null}
      </span>
      <span className="project-title">{proyecto.titulo}</span>
      <span className="project-resumen">{proyecto.resumen}</span>
      <span className="project-more">Ver el caso</span>
    </Link>
  )
}
