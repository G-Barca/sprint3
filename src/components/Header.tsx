import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTema } from '../Context/ThemeContext';

export function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const { tema, alternarTema } = useTema();

  return (
    <header className="relative bg-[#5f5b5b] border-b-[3px] border-[#66C845] px-8 py-4 flex flex-col md:flex-row items-center md:justify-between">

      {/* Logo */}
      <div className="group flex items-center mb-2 md:mb-0 pr-5">
        <Link to="/">
          <img
            className="w-[60px] h-[60px] border-2 border-[#66C845] rounded-full object-contain mr-2 transition-transform duration-300 group-hover:scale-105"
            src="/img/logo-turma-do-bem.png"
            alt="Logotipo Turma do Bem"
          />
        </Link>
        <span className="opacity-0 group-hover:opacity-100 text-[#66C845] font-bold text-xl transition-opacity duration-300">
          TURMA DO BEM
        </span>
      </div>

      <nav>

        {/* Menu hambúrguer */}
        <div
          className="md:hidden cursor-pointer z-[10000] relative"
          onClick={() => setMenuAtivo(!menuAtivo)}
        >
          <div className={`w-8 h-[3px] bg-white my-[6px] transition-all duration-300 ${menuAtivo ? '-rotate-45 translate-y-[9px]' : ''}`} />
          <div className={`w-8 h-[3px] bg-white my-[6px] transition-all duration-300 ${menuAtivo ? 'opacity-0' : ''}`} />
          <div className={`w-8 h-[3px] bg-white my-[6px] transition-all duration-300 ${menuAtivo ? 'rotate-45 -translate-y-[9px]' : ''}`} />
        </div>

        {/* Links */}
        <ul className={`
          list-none m-0 p-0 flex flex-wrap justify-center gap-[10px]
          md:flex-nowrap md:gap-[25px]
          max-md:flex-col max-md:absolute max-md:top-[80px] max-md:right-0
          max-md:bg-[#5f5b5b] max-md:w-[30vw] max-md:h-[calc(100vh-80px)]
          max-md:justify-start max-md:pt-10 max-md:items-center
          max-md:z-[9999] max-md:transition-transform max-md:duration-300
          ${menuAtivo ? 'max-md:translate-x-0' : 'max-md:translate-x-full'}
        `}>
          {[
            { label: 'Sobre',       path: '/sobre' },
            { label: 'Integrantes', path: '/integrantes' },
            { label: 'Contato',     path: '/contato' },
            { label: 'Voluntário',  path: '/voluntario' },
            { label: 'FAQ',         path: '/faq' },
            { label: 'Cadastro',    path: '/cadastro' },
          ].map(({ label, path }) => (
            <li
              key={path}
              className={`max-md:my-[15px] transition-opacity duration-500 ${menuAtivo ? 'opacity-100' : 'max-md:opacity-0'}`}
            >
              <Link
                to={path}
                className="bg-[#F68B1E] text-white font-bold no-underline rounded-[30px] px-5 py-[10px] border-2 border-[#333] transition-all duration-300 hover:bg-white hover:text-[#F68B1E] hover:scale-105 inline-block"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão de tema */}
      <button
        onClick={alternarTema}
        className="mt-2 md:mt-0 md:ml-4 px-3 py-1 rounded-full border-2 border-[#66C845] text-white text-sm font-bold hover:bg-[#66C845] transition-all duration-300"
      >
        {tema === 'claro' ? '🌑' : '☀️'}
      </button>

    </header>
  );
}