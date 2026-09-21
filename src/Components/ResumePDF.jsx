import React from 'react';
import '../styles/resume.css';
import {
  profile,
  experiencias,
  skillsCurriculo,
  formacoes,
  destaques,
} from '../data/profile';

/**
 * Currículo em PDF.
 *
 * NÃO é o site impresso: é um documento próprio, montado do zero a partir dos
 * mesmos dados de src/data/profile.js, pensado para caber em 1 página A4.
 * Fica com display:none na tela e só aparece dentro do @media print
 * (src/styles/resume.css). O botão "Salvar PDF" chama window.print().
 */
export default function ResumePDF() {
  return (
    <div className="resume" aria-hidden="true">
      {/* -------- Cabeçalho -------- */}
      <div className="r-header">
        <div className="r-name">
          {profile.nome} <b>{profile.sobrenome}</b>
        </div>
        <div className="r-role">{profile.cargo} · 5 anos de experiência</div>

        <div className="r-contact">
          <span>
            <i className="fas fa-phone"></i>
            {profile.whatsappLabel}
          </span>
          {profile.email ? (
            <span>
              <i className="fas fa-envelope"></i>
              {profile.email}
            </span>
          ) : null}
          <span>
            <i className="fab fa-linkedin"></i>
            {profile.linkedinLabel}
          </span>
          <span>
            <i className="fab fa-github"></i>
            {profile.githubLabel}
          </span>
          {profile.cidade ? (
            <span>
              <i className="fas fa-location-dot"></i>
              {profile.cidade}
            </span>
          ) : null}
        </div>
      </div>

      {/* -------- Corpo em duas colunas -------- */}
      <div className="r-body">
        {/* Coluna principal */}
        <div className="r-main">
          <div className="r-section">
            <div className="r-section-title">Perfil Profissional</div>
            <p className="r-summary">{profile.resumoCurriculo}</p>
          </div>

          <div className="r-section">
            <div className="r-section-title">Experiência Profissional</div>

            {experiencias.map((exp) => (
              <div className="r-exp" key={exp.empresa + exp.periodo}>
                <div className="r-exp-top">
                  <span className="r-exp-role">{exp.cargo}</span>
                  <span className="r-exp-date">{exp.periodo}</span>
                </div>
                <div className="r-exp-company">{exp.empresa}</div>
                <div className="r-exp-desc">{exp.descricaoCurta}</div>
                <div className="r-exp-tags">{exp.tags.join(' · ')}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna lateral */}
        <div className="r-aside">
          <div className="r-section">
            <div className="r-section-title">Competências Técnicas</div>
            {skillsCurriculo.map((bloco) => (
              <div className="r-kv" key={bloco.grupo}>
                <div className="r-kv-label">{bloco.grupo}</div>
                <div className="r-kv-value">{bloco.itens}</div>
              </div>
            ))}
          </div>

          <div className="r-section">
            <div className="r-section-title">Formação</div>
            {formacoes.map((item) => (
              <div className="r-edu" key={item.titulo}>
                <div className="r-edu-title">{item.titulo}</div>
                <div className="r-edu-inst">{item.instituicao}</div>
              </div>
            ))}
          </div>

          <div className="r-section">
            <div className="r-section-title">Diferenciais</div>
            <ul className="r-bullets">
              {destaques.map((item) => (
                <li key={item.titulo}>
                  <b>{item.titulo}.</b> {item.texto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="r-footer">
        Portfólio completo · {profile.githubLabel} · {profile.linkedinLabel}
      </div>
    </div>
  );
}
