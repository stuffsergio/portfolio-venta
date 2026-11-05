import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Nombre, teléfono o correo, y un mensaje si quieres dejarlo.",
};

function textoInicial(servicio: string | undefined) {
  if (servicio === "web") {
    return "Quiero una web para la ficha de Google de mi negocio.";
  }
  return "";
}

async function FormularioConServicio({
  searchParams,
}: {
  searchParams: Promise<{ servicio?: string }>;
}) {
  const { servicio } = await searchParams;
  return <ContactForm mensajeInicial={textoInicial(servicio)} />;
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
        <h1>Escríbenos.</h1>
        <p className="lead">Nombre, un teléfono o un correo, y un mensaje si quieres.</p>
      </header>
      <div className="wrap section">
        <Suspense fallback={<ContactForm />}>
          <FormularioConServicio searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
}
