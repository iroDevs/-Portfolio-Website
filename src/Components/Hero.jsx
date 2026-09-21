import React from 'react';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            <i className="fas fa-bolt"></i> {profile.anosExperiencia}
          </div>

          <h1 className="hero-title">
            {profile.nome}
            <br />
            <span>{profile.sobrenome}</span>
          </h1>

          <p className="hero-description">{profile.resumo}</p>

          <div className="hero-btns">
            <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
              <i className="fab fa-whatsapp"></i> Falar no WhatsApp
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Terminal NestJS */}
        <div className="code-terminal">
          <div className="terminal-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="terminal-title">developer.controller.ts</span>
          </div>

          <div className="terminal-body">
            <span className="code-keyword">import</span> {'{ Controller, Get }'}{' '}
            <span className="code-keyword">from</span>{' '}
            <span className="code-string">'@nestjs/common'</span>;
            <br />
            <br />
            <span className="code-keyword">@Controller</span>(
            <span className="code-string">'profile'</span>)
            <br />
            <span className="code-keyword">export class</span>{' '}
            <span className="code-func">DeveloperController</span> {'{'}
            <br />
            &nbsp;&nbsp;<span className="code-keyword">@Get</span>()
            <br />
            &nbsp;&nbsp;<span className="code-func">getProfile</span>() {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:{' '}
            <span className="code-string">'Pedro Henrique Loures'</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role:{' '}
            <span className="code-string">'Fullstack Developer Pleno'</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;experience:{' '}
            <span className="code-string">'5 anos'</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coreStack: [
            <span className="code-string">'NestJS'</span>,{' '}
            <span className="code-string">'React'</span>,{' '}
            <span className="code-string">'C#'</span>,{' '}
            <span className="code-string">'PostgreSQL'</span>],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status:{' '}
            <span className="code-string">'Pronto para novos desafios 🚀'</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'};'}
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </div>
        </div>
      </div>
    </section>
  );
}
