import type { Metadata } from "next";
import { Suspense } from "react";
import { BotonPago } from "@/components/BotonPago";

export const metadata: Metadata = {
  title: "Pago",
  description: "Pago de la página web, directo a la cuenta de Stripe del estudio.",
};

function AvisoEstado({
  searchParams,
}: {
  searchParams: Promise<{ estado?: string }>;
}) {
  return <Estado searchParams={searchParams} />;
}

async function Estado({
  searchParams,
}: {
  searchParams: Promise<{ estado?: string }>;
}) {
  const { estado } = await searchParams;
  if (estado === "ok") {
    return (
      <p className="lead">
        Pago recibido. Te llega un correo con lo que has adquirido y los
        pasos para adelantar.
      </p>
    );
  }
  if (estado === "cancelado") {
    return <p className="lead">El pago no se ha completado.</p>;
  }
  return null;
}

export default function PagoPage({
  searchParams,
}: {
  searchParams: Promise<{ estado?: string }>;
}) {
  return (
    <header className="wrap page-head">
      <p className="kicker">Pago</p>
      <h1>El cobro de la página.</h1>
      <p className="lead">
        El importe se acuerda en el presupuesto y se paga aquí. Entra en la
        cuenta de Stripe del estudio.
      </p>
      <Suspense>
        <AvisoEstado searchParams={searchParams} />
      </Suspense>
      <BotonPago />
    </header>
  );
}
