import { ArrowUpRight } from './Icons';

const APP_URL = 'https://app.laborin.app/';

export default function CallToAction() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <div className="cta-copy">
          <h2 id="cta-title">El próximo trabajo empieza acá.</h2>
          <p>Entra a <span translate="no">Laborin</span> para publicar un servicio o encontrar el próximo.</p>
        </div>
        <a className="btn btn-light" href={APP_URL}>
          Ir a la app
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
