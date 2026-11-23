import { Briefcase, Check, Switch, UsersThree } from './Icons';

export default function Roles() {
  return (
    <section className="section roles-section" id="roles" aria-labelledby="roles-title">
      <div className="container roles-layout">
        <div className="roles-intro">
          <span className="roles-mark" aria-hidden="true"><Switch size={26} /></span>
          <h2 id="roles-title">Una cuenta, dos puntos de vista.</h2>
          <p>
            En <span translate="no">Laborin</span> puedes pasar de contratar un servicio a ofrecerlo sin cambiar de identidad. El rol cambia; tus datos quedan en el mismo perfil.
          </p>
        </div>
        <div className="roles-stack">
          <article className="role-block role-client">
            <div className="role-heading">
              <span className="role-icon" aria-hidden="true"><UsersThree size={22} /></span>
              <h3>Cuando eres cliente</h3>
            </div>
            <p>Publicas lo que necesitas y recibes propuestas de personas con perfil verificado.</p>
            <ul>
              <li><Check size={16} /> Propuestas para comparar</li>
              <li><Check size={16} /> Pago protegido en la app</li>
            </ul>
          </article>
          <article className="role-block role-worker">
            <div className="role-heading">
              <span className="role-icon" aria-hidden="true"><Briefcase size={22} /></span>
              <h3>Cuando eres profesional</h3>
            </div>
            <p>Muestras tu trabajo, eliges dónde quieres trabajar y recibes contactos alineados con tu perfil.</p>
            <ul>
              <li><Check size={16} /> Identidad verificada</li>
              <li><Check size={16} /> Trabajos según tu ubicación</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
