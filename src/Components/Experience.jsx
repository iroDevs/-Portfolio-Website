import React from 'react';
import { experiencias } from '../data/profile';

export default function Experience() {
  return (
    <section id="experiencia" className="experiencia-section">
      <div className="container">
        <h2 className="section-title">
          Experiência <span>Profissional</span>
        </h2>
        <p className="section-subtitle">
          Minha trajetória do nível Júnior até Desenvolvedor Pleno.
        </p>

        <div className="timeline">
          {experiencias.map((exp) => (
            <div className="timeline-item" key={exp.empresa + exp.periodo}>
              <div className="timeline-dot"></div>
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.cargo}</div>
                    <div className="exp-company">{exp.empresa}</div>
                  </div>
                  <span className="exp-date">{exp.periodo}</span>
                </div>

                <p className="exp-description">{exp.descricao}</p>

                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
