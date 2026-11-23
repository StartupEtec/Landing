import { ArrowRight, Check, Clipboard, Clock, CreditCard, UsersThree } from './Icons';

const APP_URL = 'https://app.laborin.app/';

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy" id="que-es">
          <h1 className="hero-title reveal" id="hero-title">
            Un trabajo, dos lados, una sola plataforma.
          </h1>
          <p className="hero-subtitle reveal">
            <span translate="no">Laborin</span> conecta clientes con profesionales independientes para servicios puntuales, con perfiles verificados y pagos protegidos.
          </p>
          <div className="hero-actions reveal">
            <a className="btn btn-primary" href={APP_URL}>
              Entrar a <span translate="no">Laborin</span>
              <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="#como-funciona">
              Ver cómo funciona
            </a>
          </div>
        </div>

        <div className="work-order reveal" role="group" aria-label="Ejemplo de orden de servicio en Laborin">
          <div className="order-head">
            <span className="order-head-title">
              <Clipboard size={20} />
              Orden de ejemplo
            </span>
            <span className="order-status">
              <span className="status-dot" aria-hidden="true" />
              Abierta
            </span>
          </div>
          <div className="order-body">
            <div className="order-row">
              <span className="row-icon"><UsersThree size={18} /></span>
              <span className="row-label">Cliente</span>
              <span className="row-value">Describe el trabajo</span>
            </div>
            <div className="order-row">
              <span className="row-icon"><Clock size={18} /></span>
              <span className="row-label">Profesional</span>
              <span className="row-value">Perfil verificado</span>
            </div>
            <div className="order-row">
              <span className="row-icon"><CreditCard size={18} /></span>
              <span className="row-label">Pago</span>
              <span className="row-value">Protegido con Escrow</span>
            </div>
          </div>
          <div className="order-track" aria-hidden="true">
            <span className="track-node is-done"><Check size={14} /></span>
            <span className="track-line" />
            <span className="track-node is-done"><Check size={14} /></span>
            <span className="track-line" />
            <span className="track-node is-current" />
          </div>
          <p className="order-foot">Publicada · Comparada · En curso</p>
        </div>
      </div>

      <div className="container">
        <ol className="mechanism-rail" aria-label="Cómo funciona Laborin">
          <li>
            <span className="rail-index">01</span>
            <span>Publica el trabajo</span>
          </li>
          <li>
            <span className="rail-index">02</span>
            <span>Compara propuestas</span>
          </li>
          <li>
            <span className="rail-index">03</span>
            <span>Paga con protección</span>
          </li>
        </ol>
      </div>
    </section>
  );
}
