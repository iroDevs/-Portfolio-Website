import React from 'react';
import { skills } from '../data/profile';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">
          Minhas <span>Stacks</span>
        </h2>
        <p className="section-subtitle">
          Tecnologias que utilizo no dia a dia para construir soluções completas.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.nome}>
              <i className={skill.icone}></i>
              <div className="skill-name">{skill.nome}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
