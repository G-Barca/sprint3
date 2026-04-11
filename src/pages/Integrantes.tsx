export function Integrantes() {
  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <article>
          <h2 className="text-3xl font-bold text-[#F68B1E] mb-12 text-center">Nossa Equipe</h2>
          
         
          <div className="grid grid-cols-3 md:grid-cols-3 gap-10">
            
            {/* Guilherme */}

            <div className="flex flex-col items-center text-center group">
              <a href="https://github.com/G-Barca" target="_blank" rel="noreferrer" className="block mb-4 transition-transform group-hover:scale-110">
                <img 
                  src="/img/symbole-github-orange.png" 
                  alt="Guilherme Barca" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </a>
              <div className="text-[#333]">
                <p className="font-bold text-lg leading-tight">Guilherme Barca Nascimento Silva</p>
                <p className="text-[#66C845] font-semibold mt-1">RM568517</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Turma: 1TDSPB</p>
              </div>
            </div>

            {/* Juliana */}

            <div className="flex flex-col items-center text-center group">
              <a href="https://github.com/julianasrmarques" target="_blank" rel="noreferrer" className="block mb-4 transition-transform group-hover:scale-110">
                <img 
                  src="/img/symbole-github-orange.png" 
                  alt="Juliana Marques" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </a>
              <div className="text-[#333]">
                <p className="font-bold text-lg leading-tight">Juliana de Souza Rodrigues Marques</p>
                <p className="text-[#66C845] font-semibold mt-1">RM566795</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Turma: 1TDSPB</p>
              </div>
            </div>

            {/* Lucas */}

            <div className="flex flex-col items-center text-center group">
              <a href="https://github.com/lucasgkosio" target="_blank" rel="noreferrer" className="block mb-4 transition-transform group-hover:scale-110">
                <img 
                  src="/img/symbole-github-orange.png" 
                  alt="Lucas Kosio" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </a>
              <div className="text-[#333]">
                <p className="font-bold text-lg leading-tight">Lucas Gomes Kosio</p>
                <p className="text-[#66C845] font-semibold mt-1">RM566828</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Turma: 1TDSPB</p>
              </div>
            </div>

          </div>
        </article>
      </section>
    </main>
  );
}