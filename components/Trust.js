import { CreditCard, MapPin, ShieldCheck } from './Icons';

const SIGNALS = [
  {
    Icon: ShieldCheck,
    title: 'Identidad verificada',
    body: 'El registro incluye validación de identidad para generar confianza desde el primer contacto.',
  },
  {
    Icon: MapPin,
    title: 'Ubicación real',
    body: 'La ubicación ayuda a conectar la demanda con profesionales disponibles en tu zona.',
  },
  {
    Icon: CreditCard,
    title: 'Pago protegido',
    body: 'La cobranza se procesa con Stripe, sin acuerdos económicos por fuera de la app.',
  },
];

export default function Trust() {
  return (
    <section className="section proof" id="confianza" aria-labelledby="proof-title">
      <div className="container proof-layout">
        <div className="proof-intro">
          <h2 id="proof-title">Lo que hace que funcione.</h2>
          <p>Tres señales concretas, visibles desde el primer contacto.</p>
        </div>
        <dl className="proof-list">
          {SIGNALS.map(({ Icon, title, body }) => (
            <div className="proof-row" key={title}>
              <dt>
                <Icon size={22} />
                {title}
              </dt>
              <dd>{body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
