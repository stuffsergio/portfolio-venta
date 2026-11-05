import type { Metadata } from "next";
import { Agenda } from "@/components/Agenda";

export const metadata: Metadata = {
  title: "Llamada",
  description: "Agenda una llamada de veinte minutos para ver la página del negocio.",
};

export default function LlamadaPage() {
  return <Agenda />;
}
