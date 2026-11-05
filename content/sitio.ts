/**
 * Datos del estudio. Nombre, teléfono y WhatsApp se cambian solo aquí.
 */

export const sitio = {
  nombre: "Studio Web Málaga",
  nombreProvisional: false,
  /**
   * Correo que el cliente invita en GitHub y en Vercel.
   */
  correoEstudio: "std.web.malaga@gmail.com",
  descripcion:
    "Programamos la página web que tu negocio enseña en Google Maps y en su ficha.",
  localidad: "Málaga",
  region: "Andalucía",
  pais: "España",
  telefonoVisible: "600 000 000",
  telefonoE164: "+34600000000",
  whatsapp: "34600000000",
  mensajeWhatsapp:
    "Hola. Tengo un negocio en Málaga y quiero una web para mi ficha de Google.",
  mensajeLlamada:
    "Hola. Quiero agendar una llamada para ver la web de mi negocio.",
  /**
   * Enlace público del evento de Cal.com. No hace falta una clave secreta.
   */
  agendaUrl:
    process.env.NEXT_PUBLIC_CAL_URL ??
    "https://cal.com/sergio-perez-montalvo-cagncf/30min",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const

export const seccionesInicio = [
  {
    href: "/servicios",
    titulo: "La página",
    texto: "La web que el negocio enseña en Google Maps.",
  },
  {
    href: "/proyectos",
    titulo: "Proyectos",
    texto: "Notte Club y Caseo, para verlos enteros.",
  },
  {
    href: "/presupuesto",
    titulo: "Presupuesto",
    texto: "Qué entra en la página, el plazo y el mensaje.",
  },
  {
    href: "/llamada",
    titulo: "Llamada",
    texto: "Veinte minutos para ver si encaja.",
  },
  {
    href: "/pago",
    titulo: "Pago",
    texto: "El cobro de la web, directo a Stripe.",
  },
] as const

export const navegacion = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/presupuesto", label: "Presupuesto" },
  { href: "/estudio", label: "El estudio" },
  { href: "/contacto", label: "Contacto" },
] as const

export type IconoNombre =
  | "movil"
  | "chat"
  | "reloj"
  | "pin"
  | "texto"
  | "enlace"

export const incluye: { icono: IconoNombre; titulo: string; texto: string }[] =
  [
    {
      icono: "movil",
      titulo: "Se lee en el móvil",
      texto:
        "Quien abre la ficha desde el teléfono entiende el negocio sin hacer zoom ni buscar un menú.",
    },
    {
      icono: "chat",
      titulo: "Llamar y WhatsApp",
      texto:
        "La llamada y el mensaje están a un toque, con el número del negocio.",
    },
    {
      icono: "reloj",
      titulo: "Horarios y servicios",
      texto:
        "Lo que hacéis y cuándo atendéis queda escrito, no escondido en una foto del escaparate.",
    },
    {
      icono: "pin",
      titulo: "Cómo llegar",
      texto:
        "Dirección, mapa y la ruta para quien ya ha decidido acercarse.",
    },
    {
      icono: "texto",
      titulo: "Textos del negocio",
      texto:
        "Escritos para quien busca ese oficio en Málaga, con vuestras palabras y vuestras fotos.",
    },
    {
      icono: "enlace",
      titulo: "Lista para la ficha",
      texto:
        "Os dejamos la dirección publicada para pegarla en el sitio web de Google.",
    },
  ]

export const pasos = [
  {
    numero: "01",
    titulo: "Contamos el negocio",
    texto:
      "Qué ofrecéis, a quién, y qué tiene que poder hacer quien os encuentre en Maps.",
  },
  {
    numero: "02",
    titulo: "Cerramos el encargo",
    texto:
      "Qué entra en la página, qué materiales hacen falta y el plazo.",
  },
  {
    numero: "03",
    titulo: "La programamos",
    texto:
      "La veis antes de publicarla. Ajustamos textos, fotos y los botones de contacto.",
  },
  {
    numero: "04",
    titulo: "La enlazamos",
    texto:
      "Queda en el aire y os indicamos cómo ponerla en la ficha de Google.",
  },
] as const

export const faqs = [
  {
    pregunta: "¿Qué incluye la web de presencia?",
    respuesta:
      "Una página pensada para el móvil, con servicios, horarios, cómo llegar, llamada y WhatsApp, y textos para quien ya ha encontrado el negocio en Google. Si hacen falta unas pocas páginas más, por ejemplo un servicio destacado, entran en el mismo encargo.",
  },
  {
    pregunta: "¿Qué tenemos que preparar?",
    respuesta:
      "El nombre del negocio, qué ofrece, los horarios, el teléfono, la dirección, las fotos que se puedan publicar y el acceso a la ficha de Google si ya existe. Si los textos aún no están escritos, los ordenamos juntos.",
  },
  {
    pregunta: "¿Cuánto tarda?",
    respuesta:
      "Una página suele publicarse en dos o tres semanas desde que tenemos los materiales.",
  },
  {
    pregunta: "¿Cómo queda enlazada en la ficha de Google?",
    respuesta:
      "Publicamos la web y os dejamos la dirección para pegarla en el campo de sitio web de la ficha. Si hace falta, os acompañamos a colocarla. A partir de ahí, quien abre el negocio en Maps puede entrar en la página.",
  },
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta:
      "Cada encargo se valora según el negocio y lo que la web tiene que conseguir. Lo vemos en una conversación corta, sin compromiso.",
  },
] as const

export type Socio = {
  id: string
  nombre: string
  iniciales: string
  rol: string
  frase: string
  texto: string
  foto?: string
}

export const socios: Socio[] = [
  {
    id: "ventas",
    nombre: "Socio de ventas",
    iniciales: "SV",
    rol: "Ventas y encargos",
    frase:
      "Escucha el negocio, ordena lo que la web tiene que conseguir y cierra el encargo.",
    texto:
      "Habla con el comercio, la clínica o el taller en el idioma del negocio: qué ofrece, a quién atiende y qué tiene que pasar cuando alguien llega desde Google Maps. Deja el encargo claro antes de programar.",
  },
  {
    id: "desarrollo",
    nombre: "Socio de desarrollo",
    iniciales: "SD",
    rol: "Diseño y programación",
    frase:
      "Diseña y programa la web, y la deja lista para publicarla y enlazarla en la ficha.",
    texto:
      "Construye la página a medida, pensada para el móvil y para la ficha de Google.",
  },
]

export const servicios = [
  {
    id: "web",
    numero: "01",
    titulo: "Web de presencia local",
    bajada:
      "La página que el negocio enseña en su ficha de Google, en Maps y en el resto de perfiles.",
    texto:
      "La programamos para quien ya os ha encontrado: se entiende en el móvil, se puede llamar y escribir por WhatsApp, y deja claros los horarios, los servicios y cómo llegar. Es la web del negocio, hecha para ese negocio, lista para enlazar.",
    puntos: [
      "Página clara en el móvil",
      "Llamada, WhatsApp y cómo llegar",
      "Textos, fotos y horarios del negocio",
      "Dirección lista para la ficha de Google",
    ],
    enlace: "/presupuesto",
    cta: "Pedir esta web",
  },
] as const

export const lineasPresupuesto = [
  {
    id: "web",
    titulo: "Web de presencia",
    plazo: "2 a 3 semanas",
    texto:
      "La página de la ficha de Google: móvil, llamada, WhatsApp, horarios, servicios y cómo llegar.",
    incluye: [
      "Una página clara en el móvil",
      "Llamada, WhatsApp y mapa",
      "Textos y horarios del negocio",
      "Dirección lista para la ficha",
    ],
  },
] as const

export const extrasPresupuesto = [
  { id: "paginas", tipo: "web", label: "Más de una página" },
  { id: "textos", tipo: "web", label: "Textos escritos por el estudio" },
  { id: "fotos", tipo: "web", label: "Selección de fotografías" },
] as const

export const condicionesPresupuesto = [
  {
    titulo: "El importe se escribe antes",
    texto:
      "Sale de lo que marques aquí. Lo confirmamos por escrito antes de empezar, con el alcance y el plazo.",
  },
  {
    titulo: "50% al aceptar",
    texto:
      "Ese pago reserva las fechas y pone el trabajo en marcha. A partir de ahí el calendario es vuestro.",
  },
  {
    titulo: "50% al publicar",
    texto:
      "El resto se abona cuando la web está en el aire y la dirección está lista para la ficha de Google.",
  },
] as const

export function datosEstructurados() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: sitio.nombre,
    description: sitio.descripcion,
    url: sitio.url,
    telephone: sitio.telefonoE164,
    areaServed: {
      "@type": "City",
      name: sitio.localidad,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: sitio.localidad,
      addressRegion: sitio.region,
      addressCountry: "ES",
    },
    makesOffer: servicios.map((servicio) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: servicio.titulo,
        description: servicio.bajada,
      },
    })),
  }
}
