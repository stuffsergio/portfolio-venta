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
  etiqueta?: string
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
    slug: "notte-club",
    sector: "Moda",
    tipo: "aplicacion",
    etiqueta: "Tienda online",
    titulo: "Notte Club, la tienda de la marca",
    resumen:
      "Tienda de streetwear con catálogo, ficha de producto, carrito y pago en la propia web.",
    problema:
      "La marca enseñaba las prendas en redes, pero el pedido no se podía cerrar en una tienda propia, con talla, carrito y pago.",
    solucion:
      "Una tienda en notteclub.es: catálogo, ficha de cada prenda, carrito, pago con Stripe, newsletter, lookbook y fondos de pantalla.",
    resultado:
      "Quien quiere una prenda la elige y la paga en la web de la marca.",
    imagenes: ["/proyectos/notte-club.webp", "/proyectos/notte-club-2.webp"],
    cliente: {
      nombre: "Notte Club",
      enlace: "https://notteclub.es",
    },
    ejemplo: false,
  },
  {
    slug: "caseo-events",
    sector: "Eventos",
    tipo: "web",
    etiqueta: "Web de marca",
    titulo: "Caseo, la noche en una sola página",
    resumen:
      "Web de la promotora con el próximo evento, el archivo de volúmenes y la galería de la noche.",
    problema:
      "La marca vivía en Instagram. Quien llegaba no tenía una página propia donde ver el próximo evento, el venue y las noches anteriores.",
    solucion:
      "Una web editorial en navy y blanco: el evento destacado a pantalla completa, el archivo de volúmenes, la galería y el enlace a Instagram.",
    resultado:
      "Caseo tiene una web de marca, con la próxima noche delante y el archivo detrás.",
    imagenes: ["/proyectos/caseo-cartel.webp", "/proyectos/caseo-noche.jpg"],
    cliente: {
      nombre: "Caseo",
      enlace: "https://caseo-events.vercel.app/",
    },
    ejemplo: false,
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
]

export function etiquetaTipo(tipo: TipoProyecto) {
  return tipo === "web" ? "Web de presencia" : "Aplicación a medida"
}

export function getProyecto(slug: string) {
  return proyectos.find((proyecto) => proyecto.slug === slug)
}
