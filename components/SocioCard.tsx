import Image from "next/image"
import type { Socio } from "@/content/sitio"

export function SocioCard({
  socio,
  compacto = false,
}: {
  socio: Socio
  compacto?: boolean
}) {
  return (
    <article className="partner">
      {socio.foto ? (
        <Image
          className="avatar avatar-foto"
          src={socio.foto}
          alt={socio.nombre}
          width={88}
          height={88}
        />
      ) : (
        <span className="avatar" aria-hidden="true">
          {socio.iniciales}
        </span>
      )}
      <p className="partner-rol">{socio.rol}</p>
      <h3>{socio.nombre}</h3>
      <p>{compacto ? socio.frase : socio.texto}</p>
    </article>
  )
}
