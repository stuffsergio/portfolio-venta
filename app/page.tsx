import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { proyectos } from "@/content/proyectos";
import { seccionesInicio } from "@/content/sitio";

export default function Home() {
  const hechos = proyectos.filter((proyecto) => !proyecto.ejemplo);

  return (
    <>
      <section className="wrap hero enter">
        <h1>Ayudando a empresas locales a vender más</h1>
        <p className="lead">
          Hemos trabajado con empresas y marcas que han obtenido resultados,
          pero nuestro trabajo es hacer crecer a los que aún no lo son
        </p>
      </section>

      <Marquee proyectos={hechos} />

      <nav className="wrap indice" aria-label="Secciones">
        {seccionesInicio.map((seccion) => (
          <Link key={seccion.href} href={seccion.href}>
            <span>
              <strong>{seccion.titulo}</strong>
              <span>{seccion.texto}</span>
            </span>
            <span className="indice-ver">Ver</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
