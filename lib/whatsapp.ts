import { sitio } from "@/content/sitio"

export function enlaceWhatsapp(mensaje: string) {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export function mensajeEncargo(datos: {
  nombre: string
  negocio: string
  telefono: string
  necesidad: string
}) {
  return [
    `Hola, soy ${datos.nombre.trim()}, de ${datos.negocio.trim()}.`,
    `Mi teléfono es ${datos.telefono.trim()}.`,
    datos.necesidad.trim(),
  ]
    .filter((parte) => parte.length > 0)
    .join(" ")
}
