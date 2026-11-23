import { Briefcase, Clock, Device, Plus, ShieldCheck, UsersThree } from './Icons';

const Brand = () => <span translate="no">Laborin</span>;

const QUESTIONS = [
  {
    id: 'que-es',
    Icon: Device,
    question: <>¿Qué es <Brand />?</>,
    answer:
      'Es una plataforma on-demand que conecta a clientes con profesionales independientes para servicios puntuales y locales.',
  },
  {
    id: 'para-quien',
    Icon: UsersThree,
    question: '¿Para quién es?',
    answer:
      'Para quien necesita contratar un servicio y para quien quiere ofrecerlo. Una sola cuenta permite alternar entre ambos roles.',
  },
  {
    id: 'problema',
    Icon: Clock,
    question: '¿Qué problema resuelve?',
    answer:
      'Reduce la fricción de buscar, comparar y acordar un servicio con información clara sobre quién lo hace, dónde trabaja y en qué condiciones.',
  },
  {
    id: 'confianza',
    Icon: ShieldCheck,
    question: '¿Cómo genera confianza?',
    answer:
      'Con verificación de identidad, ubicación y pagos protegidos procesados con Stripe dentro de la app.',
  },
  {
    id: 'rubro',
    Icon: Briefcase,
    question: '¿Está limitada a un rubro?',
    answer:
      'No. La plataforma organiza profesionales por categorías de servicio para que cada trabajo encuentre al perfil adecuado.',
  },
  {
    id: 'donde-vive',
    Icon: Device,
    question: <>¿Dónde vive <Brand />?</>,
    answer:
      'La app está disponible en iOS, Android y web en app.laborin.app. Esta landing es la puerta de entrada en laborin.app.',
  },
];

export default function Faq() {
  return (
    <section className="section faq" id="preguntas" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <h2 id="faq-title">Preguntas frecuentes</h2>
          <p>Lo esencial para entender de qué se trata <Brand />.</p>
        </div>
        <div className="faq-list">
          {QUESTIONS.map(({ id, Icon, question, answer }) => (
            <details className="faq-item" key={id} name="laborin-faq">
              <summary>
                <span className="faq-icon" aria-hidden="true"><Icon size={20} /></span>
                <span className="faq-question">{question}</span>
                <span className="faq-plus" aria-hidden="true"><Plus size={18} /></span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
