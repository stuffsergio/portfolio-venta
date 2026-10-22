import type { Metadata } from "next";
import { Suspense } from "react";
import { Presupuesto } from "@/components/Presupuesto";

export const metadata: Metadata = {
  title: "Presupuesto",
  description:
    "Elige web de presencia o aplicación a medida, marca lo que entra y pide el presupuesto por WhatsApp.",
};

async function PresupuestoConTipo({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {
  const { tipo } = await searchParams;
  return <Presupuesto key={tipo ?? "web"} tipoInicial={tipo} />;
}

export default function PresupuestoPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {
  return (
    <>
      <header className="wrap page-head">
        <p className="kicker">Presupuesto</p>
        <h1>El encargo, antes del precio.</h1>
        <p className="lead">
          Eliges qué hay que programar y el mensaje sale escrito. El importe se
          confirma por escrito antes de empezar.
        </p>
      </header>
      <div className="wrap section">
        <Suspense fallback={<Presupuesto />}>
          <PresupuestoConTipo searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
}
