import React from 'react';
import { profile } from '../data/profile';

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <a href="#topo" className="logo">
          <span className="logo-symbol">&lt;/&gt;</span> Pedro Loures
        </a>

        <ul className="nav-links">
          <li><a href="#sobre">Destaques</a></li>
          <li><a href="#skills">Stacks</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <div className="header-actions">
          <button
            type="button"
            onClick={() => window.print()}
            className="btn-pdf"
            title="Gerar currículo em PDF"
          >
            <i className="fas fa-file-pdf"></i> Salvar PDF
          </button>

          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-header"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
