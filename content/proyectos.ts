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
    tipo: "web",
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
    imagenes: [
      "/proyectos/notte-01.jpg",
      "/proyectos/notte-02.webp",
      "/proyectos/notte-03.webp",
      "/proyectos/notte-04.webp",
    ],
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
    imagenes: ["/proyectos/caseo-01.jpg", "/proyectos/caseo-noche.jpg"],
    cliente: {
      nombre: "Caseo Events",
      enlace: "https://caseo-events.vercel.app/",
    },
    ejemplo: false,
  },
  {
    slug: "chiringuito-mauri",
    sector: "Hostelería",
    tipo: "web",
    etiqueta: "Web de presencia",
    titulo: "Chiringuito Mauri, la mesa en la playa",
    resumen:
      "Página del chiringuito de El Playazo, en Nerja, con la carta, el horario y cómo llegar.",
    problema:
      "Quien buscaba el chiringuito no tenía una página donde ver la playa, la brasa y si podía sentarse sin reservar.",
    solucion:
      "Una web en español e inglés: el lugar, las especialidades, la galería, el horario, el mapa de El Playazo y la llamada. Las preguntas de antes de ir —sin reservas, la paella, el parking y el perro— quedan a la vista.",
    resultado:
      "Quien llega desde Google ve la mesa, la carta y el camino a la arena antes de salir de casa.",
    imagenes: [
      "/proyectos/mauri-01.webp",
      "/proyectos/mauri-02.webp",
      "/proyectos/mauri-03.webp",
      "/proyectos/mauri-04.jpg",
    ],
    cliente: {
      nombre: "Chiringuito Mauri",
      enlace: "https://chiringuito-mauri.vercel.app/",
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
