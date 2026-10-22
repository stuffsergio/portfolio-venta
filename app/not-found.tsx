import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap empty">
      <p className="kicker">404</p>
      <h1>Esta página no está.</h1>
      <p className="lead">
        El enlace no coincide con ninguna sección del estudio.
      </p>
      <p className="case-nav">
        <Link href="/">Volver al inicio</Link>
        <Link href="/contacto">Ir al contacto</Link>
      </p>
    </div>
  );
}
