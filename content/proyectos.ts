export type TipoProyecto = "web" | "aplicacion"

export type ClienteProyecto = {
  nombre: string
  logo?: string
  enlace?: string
}

export type Proyecto = {
  slug: string
  sector: string
  tipo: TipoProyecto
  titulo: string
  resumen: string
  problema: string
  solucion: string
  resultado?: string
  imagenes: string[]
  cliente?: ClienteProyecto
  ejemplo: boolean
}

export const proyectos: Proyecto[] = [
  {
    slug: "consulta-en-maps",
    sector: "Salud",
    tipo: "web",
    titulo: "Una consulta que se entiende desde Maps",
    resumen:
      "Web de una página para que quien abre la ficha vea servicios, horario y pueda llamar.",
    problema:
      "Quien encontraba la consulta en Google Maps llegaba a una ficha sin una página donde ver los servicios, el horario y el teléfono con calma.",
    solucion:
      "Una web de presencia, pensada para el móvil, con los servicios, el horario, cómo llegar y los botones de llamada y WhatsApp. La dirección queda lista para pegarla en la ficha.",
    resultado:
      "La ficha puede enlazar la web y, desde el teléfono, la llamada está a un toque.",
    imagenes: [],
    ejemplo: true,
  },
  {
    slug: "comercio-de-barrio",
    sector: "Comercio",
    tipo: "web",
    titulo: "Un comercio con oficio, horario y ruta",
    resumen:
      "Página para un comercio de barrio que en Maps no contaba qué vendía ni cuándo abría.",
    problema:
      "El negocio se apoyaba en el escaparate. En la ficha de Google no se entendía qué vendía, el horario cambiaba según el día y la dirección era fácil de perder.",
    solucion:
      "Una página con un recorrido breve de lo que vende, las fotos del local, el horario por días y el mapa para llegar. Llamada y WhatsApp quedan fijos al hacer scroll.",
    resultado:
      "Quien llega desde Maps ve el oficio del comercio antes de decidir si se acerca.",
    imagenes: [],
    ejemplo: true,
  },
  {
    slug: "reservas-a-medida",
    sector: "Servicios",
    tipo: "aplicacion",
    titulo: "Reservas sin libreta ni horas pisadas",
    resumen:
      "Aplicación web para pedir hora y ver el día ordenado, cuando la página de presentación ya no basta.",
    problema:
      "Las reservas llegaban por teléfono y se apuntaban en una libreta. Dos personas cogían la misma hora y el hueco se descubría al llegar el cliente.",
    solucion:
      "Una aplicación web en la que el cliente pide hora según los huecos libres y el negocio ve el día en una sola pantalla. La web de presencia sigue explicando el servicio y enlaza con la reserva.",
    resultado:
      "El día se consulta en la aplicación, con las horas ocupadas visibles para quien atiende.",
    imagenes: [],
    ejemplo: true,
  },
]

export function etiquetaTipo(tipo: TipoProyecto) {
  return tipo === "web" ? "Web de presencia" : "Aplicación a medida"
}

export function getProyecto(slug: string) {
  return proyectos.find((proyecto) => proyecto.slug === slug)
}
