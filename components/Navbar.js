import { ArrowUpRight, BrandMark } from './Icons';

const APP_URL = 'https://app.laborin.app/';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="brand" href="#inicio" aria-label="Laborin, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            <BrandMark size={18} />
          </span>
          <span translate="no">Laborin</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#que-es">Qué es</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#preguntas">Preguntas</a>
          <a className="btn btn-primary btn-small" href={APP_URL}>
            Ir a la app
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
