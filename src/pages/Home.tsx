import { useEffect } from 'react';
export function Home() {
  useEffect(() => {
  document.title = 'Turma do Bem';
}, []);
  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <article>
          <h2 className="text-3xl font-bold text-[#F68B1E] mb-10 text-center">Ações:</h2>

    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Dentista do Bem */}

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 overflow-hidden rounded-full border-4 border-[#66C845] w-[200px] h-[200px]">
                <img 
                  src="/img/dentista-do-bem-1.png" 
                  alt="Dentista voluntário" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold text-[#333] block mb-2 text-center text-lg">Dentista do Bem</span>
                O Dentista do Bem é o principal programa da TdB, destinado a crianças e adolescentes em situação de
                vulnerabilidade social na faixa dos 11 a 17 anos. Os nossos beneficiários possuem graves problemas bucais e não têm condições financeiras de pagar pelo tratamento.
              </p>
            </div>

            {/* Apolônias do Bem */}

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 overflow-hidden rounded-full border-4 border-[#66C845] w-[200px] h-[200px]">
                <img 
                  src="/img/apolonias-do-bem.png" 
                  alt="Apolônias do Bem" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold text-[#333] block mb-2 text-center text-lg">Apolônias do Bem</span>
                Apolônias do Bem oferece tratamento odontológico gratuito para mulheres cis e trans que vivenciaram
                situações de violência e tiveram a dentição afetada pelas agressões. As beneficiárias são selecionadas através de triagens em que passam por um rápido exame oral.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}