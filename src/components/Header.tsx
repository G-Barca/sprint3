import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo-img" src="/img/logo-turma-do-bem.png" alt="Logotipo Turma do Bem" />
        </Link>
        <span className="logo-text">TURMA DO BEM</span>
      </div>

      <nav className="menu">
  <div 
    className={`mobile-menu ${menuAtivo ? 'active' : ''}`} 
    onClick={() => setMenuAtivo(!menuAtivo)}
  >
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
  </div>

 
  <ul className={`nav-list ${menuAtivo ? 'active' : ''}`}>
    <li><Link to="/sobre">Sobre</Link></li>
    <li><Link to="/integrantes">Integrantes</Link></li>
    <li><Link to="/contato">Contato</Link></li>
    <li><Link to="/voluntario">Voluntário</Link></li>
    <li><Link to="/faq">FAQ</Link></li>
    <li><Link className="btncadastro" to="/cadastro">Cadastro</Link></li>
  </ul>
</nav>
    </header>
  );
}