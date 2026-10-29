import type { Metadata, Viewport } from "next";
import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { datosEstructurados, sitio } from "@/content/sitio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: {
    default: `${sitio.nombre} | Webs para negocios en Málaga`,
    template: `%s | ${sitio.nombre}`,
  },
  description: sitio.descripcion,
  openGraph: {
    locale: "es_ES",
    type: "website",
    title: `${sitio.nombre} | Webs para negocios en Málaga`,
    description: sitio.descripcion,
    siteName: sitio.nombre,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const json = JSON.stringify(datosEstructurados());

  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <Cursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
