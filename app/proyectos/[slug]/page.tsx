import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Visor } from "@/components/Visor";
import {
  etiquetaTipo,
  getProyecto,
  proyectos,
} from "@/content/proyectos";

type Params = { slug: string };

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({ slug: proyecto.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) return { title: "Proyecto" };
  return {
    title: proyecto.titulo,
    description: proyecto.resumen,
  };
}

export default function ProyectoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  return (
    <Suspense fallback={<p className="wrap page-head kicker">Proyectos</p>}>
      <FichaProyecto params={params} />
    </Suspense>
  );
}

async function FichaProyecto({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) notFound();

  const otros = proyectos.filter((item) => item.slug !== proyecto.slug);

  return (
    <article className="wrap section">
      <header className="page-head">
        <p className="kicker">
          <Link href="/proyectos">Proyectos</Link>
        </p>
        <div className="case-tags">
          <span className="tag">{proyecto.sector}</span>
          <span className="tag">
            {proyecto.etiqueta ?? etiquetaTipo(proyecto.tipo)}
          </span>
          {proyecto.ejemplo ? <span className="tag tag-muestra">Muestra</span> : null}
        </div>
        <h1>{proyecto.titulo}</h1>
        <p className="lead">{proyecto.resumen}</p>
      </header>

      {proyecto.ejemplo ? (
        <p className="notice">
          Caso de muestra, todavía sin nombre de cliente. El hueco para el
          nombre, el logo y el enlace ya está preparado.
        </p>
      ) : null}

      {proyecto.cliente ? (
        <p className="case-nav">
          <span>Para {proyecto.cliente.nombre}</span>
          {proyecto.cliente.enlace ? (
            <a
              href={proyecto.cliente.enlace}
              target="_blank"
              rel="noopener noreferrer"
            >
              {proyecto.cliente.enlace.includes("instagram.com")
                ? "Ver la marca"
                : "Ver el sitio"}
            </a>
          ) : null}
        </p>
      ) : null}

      {proyecto.imagenes.length > 0 ? (
        <Visor imagenes={proyecto.imagenes} titulo={proyecto.titulo} />
      ) : null}

      <div className="case">
        <div className="case-block">
          <h2>El problema</h2>
          <p>{proyecto.problema}</p>
        </div>
        <div className="case-block">
          <h2>Qué se programó</h2>
          <p>{proyecto.solucion}</p>
        </div>
        {proyecto.resultado ? (
          <div className="case-block">
            <h2>El resultado</h2>
            <p>{proyecto.resultado}</p>
          </div>
        ) : null}
      </div>

      <p className="case-nav">
        {otros.map((item) => (
          <Link key={item.slug} href={`/proyectos/${item.slug}`}>
            {item.titulo}
          </Link>
        ))}
        <Link href="/contacto">Contar un encargo parecido</Link>
      </p>
    </article>
  );
}
