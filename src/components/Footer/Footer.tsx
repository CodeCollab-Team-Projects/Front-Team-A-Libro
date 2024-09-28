import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="home__footer">
      <p>BookCheck © 2024. Todos los derechos reservados.</p>
      <div>
        <a href="/about">Acerca de</a>
        <a href="/privacy">Política de privacidad</a>
        <a href="/terms">Términos y condiciones</a>
      </div>
      <p>Conectémonos:
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;
