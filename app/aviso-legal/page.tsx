import type { Metadata } from "next";
import { sitio } from "@/content/sitio";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${sitio.nombre}, estudio de webs en ${sitio.localidad}.`,
};

export default function AvisoLegalPage() {
  return (
    <>
      <header className="wrap page-head">
        <p className="kicker">Legal</p>
        <h1>Aviso legal</h1>
      </header>
      <div className="wrap prose">
        <h2>Titular</h2>
        <p>
          {sitio.nombre}
          {sitio.nombreProvisional
            ? " (denominación provisional del estudio)"
            : ""}
          . Actividad: diseño y programación de páginas y aplicaciones web para
          negocios. Ámbito: {sitio.localidad}, {sitio.region}, {sitio.pais}.
        </p>
        <p>
          Contacto:{" "}
          <a href={`tel:${sitio.telefonoE164}`}>{sitio.telefonoVisible}</a>. La
          calle se publicará cuando el estudio tenga un local o un domicilio
          fiscal que mostrar.
        </p>
        <h2>Objeto</h2>
        <p>
          Esta web presenta los servicios del estudio y permite solicitar
          información sobre un encargo. Los textos de los proyectos marcados
          como muestra describen el tipo de trabajo. No identifican a un
          cliente.
        </p>
        <h2>Propiedad intelectual</h2>
        <p>
          Los textos, el diseño y el código de este sitio pertenecen al
          estudio, salvo los materiales que un cliente aporte para su propio
          encargo. Queda reservada su reproducción.
        </p>
        <h2>Responsabilidad</h2>
        <p>
          El estudio mantiene los contenidos con cuidado. El uso de la
          información de esta web para decidir un encargo se completa en la
          conversación posterior, donde se concreta alcance y plazo.
        </p>
      </div>
    </>
  );
}
