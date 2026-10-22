export function FichaPreview() {
  return (
    <aside className="ficha" aria-label="Ejemplo de cómo se usa la web del negocio">
      <p className="ficha-kicker">Vista de ejemplo</p>
      <p className="ficha-nombre">Tu negocio</p>
      <p className="ficha-estado">
        <span className="ficha-punto" aria-hidden="true" />
        Málaga · Abierto ahora
      </p>
      <div className="ficha-botones" aria-hidden="true">
        <span>Llamar</span>
        <span>WhatsApp</span>
      </div>
      <ul className="ficha-lista">
        <li>Servicios a la vista</li>
        <li>Horario de hoy</li>
        <li>Cómo llegar</li>
      </ul>
    </aside>
  )
}
