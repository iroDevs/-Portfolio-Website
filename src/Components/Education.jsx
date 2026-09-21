import React from 'react';
import { formacoes } from '../data/profile';

export default function Education() {
  return (
    <section id="formacao">
      <div className="container">
        <h2 className="section-title">
          Formação <span>Acadêmica</span>
        </h2>
        <p className="section-subtitle">Minhas qualificações e aprendizados continuados.</p>

        <div className="edu-grid">
          {formacoes.map((item) => (
            <div className="edu-card" key={item.titulo}>
              <i className={item.icone}></i>
              <h3 className="edu-title">{item.titulo}</h3>
              <p className="edu-institution">{item.instituicao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
