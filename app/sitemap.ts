import type { MetadataRoute } from "next";
import { proyectos } from "@/content/proyectos";
import { sitio } from "@/content/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = [
    "",
    "/servicios",
    "/llamada",
    "/pago",
    "/proyectos",
    "/estudio",
    "/contacto",
    "/aviso-legal",
    "/privacidad",
    ...proyectos.map((proyecto) => `/proyectos/${proyecto.slug}`),
  ];

  return rutas.map((ruta) => ({
    url: `${sitio.url}${ruta}`,
    lastModified: new Date("2026-10-23"),
  }));
}
