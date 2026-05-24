import { useEffect } from 'react';

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

            {/* Guilherme */}
            <div className="flex flex-col items-center text-center group">
              <img
                src="/img/guilherme.png"
                alt="Guilherme Barca"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#66C845] mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="text-[#333]">
                <p className="font-bold text-lg leading-tight">Guilherme Barca Nascimento Silva</p>
                <p className="text-[#66C845] font-semibold mt-1">RM568517</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Turma: 1TDSPB</p>
                <div className="flex justify-center gap-4 mt-3">
                  <a href="https://github.com/G-Barca" target="_blank" rel="noreferrer" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors text-sm">GitHub</a>
                  <a href="https://www.linkedin.com/in/o-guilherme-barca" target="_blank" rel="noreferrer" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors text-sm">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Juliana */}
            <div className="flex flex-col items-center text-center group">
              <img
                src="/img/juliana.png"
                alt="Juliana Marques"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#66C845] mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="text-[#333]">
                <p className="font-bold text-lg leading-tight">Juliana de Souza Rodrigues Marques</p>
                <p className="text-[#66C845] font-semibold mt-1">RM566795</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Turma: 1TDSPB</p>
                <div className="flex justify-center gap-4 mt-3">
                  <a href="https://github.com/julianasrmarques" target="_blank" rel="noreferrer" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors text-sm">GitHub</a>
                  <a href="https://www.linkedin.com/in/juliana-marques-bbb522329/" target="_blank" rel="noreferrer" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors text-sm">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Lucas */}
            <div className="flex flex-col items-center text-center group">
              <img
                src="/img/lucas.png"
                alt="Lucas Kosio"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#66C845] mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="text-[#333]">
                <p className="font-bold text-lg leading-tight">Lucas Gomes Kosio</p>
                <p className="text-[#66C845] font-semibold mt-1">RM566828</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Turma: 1TDSPB</p>
                <div className="flex justify-center gap-4 mt-3">
                  <a href="https://github.com/lucasgkosio" target="_blank" rel="noreferrer" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors text-sm">GitHub</a>
                  <a href="https://www.linkedin.com/in/lucas-kosio-85b691411/" target="_blank" rel="noreferrer" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors text-sm">LinkedIn</a>
                </div>
              </div>
            </div>

          </div>
        </article>
      </section>
    </main>
  );
}