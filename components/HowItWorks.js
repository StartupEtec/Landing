const STEPS = [
  {
    title: 'Publica lo que necesitas',
    body: 'Describe el trabajo y la ubicación para que los profesionales disponibles puedan verlo.',
  },
  {
    title: 'Compara con criterio',
    body: 'Revisa perfiles verificados y propuestas antes de elegir con quién trabajar.',
  },
  {
    title: 'Cierra con pago protegido',
    body: 'Acuerda los detalles y realiza el pago dentro de la plataforma.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section how" id="como-funciona" aria-labelledby="how-title">
      <div className="container how-grid">
        <div className="how-intro">
          <h2 id="how-title">Del aviso al pago, con menos fricción.</h2>
          <p><span translate="no">Laborin</span> ordena las partes del trabajo para que ambos lados sepan qué esperar.</p>
        </div>
        <ol className="how-list">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <span className="how-index">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
