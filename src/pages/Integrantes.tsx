import { useEffect } from 'react';
import type { Integrante } from '../types';

const integrantes: Integrante[] = [
  {
    nome: 'Guilherme Barca Nascimento Silva',
    rm: 'RM568517',
    turma: '1TDSPB',
    github: 'https://github.com/G-Barca',
    linkedin: 'https://www.linkedin.com/in/o-guilherme-barca',
    foto: '/img/guilherme.png',
  },
  {
    nome: 'Juliana de Souza Rodrigues Marques',
    rm: 'RM566795',
    turma: '1TDSPB',
    github: 'https://github.com/julianasrmarques',
    linkedin: 'https://www.linkedin.com/in/juliana-marques-bbb522329/',
    foto: '/img/juliana.png',
  },
  {
    nome: 'Lucas Gomes Kosio',
    rm: 'RM566828',
    turma: '1TDSPB',
    github: 'https://github.com/lucasgkosio',
    linkedin: 'https://www.linkedin.com/in/lucas-kosio-85b691411/',
    foto: '/img/lucas.png',
  },
];

export function Integrantes() {
  useEffect(() => {
    document.title = 'Integrantes | Turma do Bem';
  }, []);

  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <article>
          <h2 className="text-3xl font-bold text-[#F68B1E] mb-12 text-center">Nossa Equipe</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {integrantes.map((i) => (
              <div key={i.rm} className="flex flex-col items-center text-center group">
                <img
                  src={i.foto}
                  alt={i.nome}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#66C845] mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="text-[#333]">
                  <p className="font-bold text-lg leading-tight">{i.nome}</p>
                  <p className="text-[#66C845] font-semibold mt-1">{i.rm}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Turma: {i.turma}</p>
                  <div className="flex justify-center gap-4 mt-3">
                    <a href={i.github} target="_blank" rel="noreferrer" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors text-sm">GitHub</a>
                    <a href={i.linkedin} target="_blank" rel="noreferrer" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors text-sm">LinkedIn</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}