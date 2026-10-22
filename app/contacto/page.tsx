import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { sitio } from "@/content/sitio";
import { enlaceWhatsapp } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contad el negocio por WhatsApp o con el formulario. Estudio en Málaga.",
};

function textoInicial(servicio: string | undefined) {
  if (servicio === "aplicacion") {
    return "Necesito una aplicación web a medida para mi negocio.";
  }
  if (servicio === "web") {
    return "Necesito una web para la ficha de Google de mi negocio.";
  }
  return "";
}

async function FormularioConServicio({
  searchParams,
}: {
  searchParams: Promise<{ servicio?: string }>;
}) {
  const { servicio } = await searchParams;

  return (
    <ContactForm
      key={servicio ?? "general"}
      necesidadInicial={textoInicial(servicio)}
    />
  );
}

export default function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ servicio?: string }>;
}) {
  return (
    <>
      <header className="wrap page-head">
        <p className="kicker">Contacto</p>
        <h1>Contadnos el negocio.</h1>
        <p className="lead">
          Nombre, teléfono y qué tiene que conseguir la web. Respondemos desde{" "}
          {sitio.localidad}.
        </p>
      </header>
      <div className="wrap contact-layout">
        <Suspense fallback={<ContactForm />}>
          <FormularioConServicio searchParams={searchParams} />
        </Suspense>
        <aside className="contact-aside">
          <p className="kicker">{sitio.localidad}</p>
          <h2>También directo</h2>
          <p>
            <a href={`tel:${sitio.telefonoE164}`}>{sitio.telefonoVisible}</a>
          </p>
          <p>
            <a
              href={enlaceWhatsapp(sitio.mensajeWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir WhatsApp
            </a>
          </p>
          <p>
            El mensaje de WhatsApp ya viene preparado. Si preferís, el
            formulario lo rellena con los datos del negocio.
          </p>
        </aside>
      </div>
    </>
  );
}
