import React from 'react';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contato">
      <div className="container">
        <div className="contact-box">
          <h2 className="section-title" style={{ marginBottom: '10px' }}>
            Vamos Construir Algo <span>Incrível?</span>
          </h2>

          <p className="contact-text">
            Estou disponível para novos projetos, consultorias e oportunidades profissionais.
            Entre em contato direto pelo WhatsApp ou redes sociais!
          </p>

          <div className="contact-links">
            <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
              <i className="fab fa-whatsapp"></i> {profile.whatsappLabel}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
