import React from 'react';
import { destaques } from '../data/profile';

export default function Highlights() {
  return (
    <section className="nest-cards-section" id="sobre">
      <div className="container">
        <h2 className="section-title">
          Especialidades &amp; <span>Diferenciais</span>
        </h2>
        <p className="section-subtitle">
          Passe o mouse sobre a área abaixo para desembaralhar os cards no próprio lugar.
        </p>

        <div className="cards-stack-wrapper">
          {destaques.map((item, i) => (
            <div className={`nest-card card-${i + 1}`} key={item.titulo}>
              <div className="card-icon">
                <i className={item.icone}></i>
              </div>
              <h3 className="card-title">{item.titulo}</h3>
              <p className="card-text">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
