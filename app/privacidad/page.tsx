import type { Metadata } from "next";
import { sitio } from "@/content/sitio";

export const metadata: Metadata = {
  title: "Privacidad",
  description: `Privacidad de ${sitio.nombre}. El formulario abre WhatsApp y no se guarda en un servidor.`,
};

export default function PrivacidadPage() {
  return (
    <>
      <header className="wrap page-head">
        <p className="kicker">Legal</p>
        <h1>Privacidad</h1>
      </header>
      <div className="wrap prose">
        <h2>Responsable</h2>
        <p>
          {sitio.nombre}, en {sitio.localidad}. Contacto: por el formulario de
          la web o por WhatsApp.
        </p>
        <h2>Qué datos se tratan</h2>
        <p>
          Los que la persona escribe al llamar, al escribir por WhatsApp o al
          usar el formulario: nombre, negocio, teléfono y qué necesita. El
          formulario no se envía a un servidor del estudio. Abre WhatsApp con
          ese texto.
        </p>
        <h2>Para qué</h2>
        <p>
          Responder al encargo y preparar, si encaja, una propuesta de página
          web. La base es la solicitud de la persona interesada.
        </p>
        <h2>WhatsApp</h2>
        <p>
          Si se usa WhatsApp, la conversación la trata también Meta Platforms
          según sus condiciones. El estudio conserva el hilo en el teléfono
          desde el que atiende, el tiempo necesario para gestionar el encargo y
          las obligaciones que de él se deriven.
        </p>
        <h2>Derechos</h2>
        <p>
          Se puede pedir acceso, rectificación, supresión, oposición y
          limitación escribiendo o llamando al teléfono del estudio. También se
          puede reclamar ante la Agencia Española de Protección de Datos.
        </p>
        <h2>Cookies</h2>
        <p>
          Esta web no usa cookies de analítica ni de publicidad. No hay un
          panel de medición de visitas asociado a este sitio.
        </p>
      </div>
    </>
  );
}
