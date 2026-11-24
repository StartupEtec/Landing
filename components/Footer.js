const APP_URL = 'https://app.laborin.app/';
const TELEGRAM_URL = 'https://t.me/Laborin_Bot?start=landing';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>©&nbsp;{new Date().getFullYear()}&nbsp;<span translate="no">Laborin</span>. Todos los derechos reservados.</span>
        <nav className="footer-links" aria-label="Enlaces del pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#que-es">Qué es</a>
          <a href="#preguntas">Preguntas</a>
          <a href={APP_URL}>Ir a la app</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a>
        </nav>
      </div>
    </footer>
  );
}
