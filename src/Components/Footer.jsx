import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Pedro Henrique Loures Oliveira · Desenvolvido com
          inspiração em NestJS
        </p>
      </div>
    </footer>
  );
}
