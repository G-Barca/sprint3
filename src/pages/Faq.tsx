import { useEffect } from 'react';
export function FAQ() {
  useEffect(() => {
  document.title = 'FAQ | Turma do Bem';
}, []);
  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
        <article>
          <h2 className="text-3xl font-bold text-[#F68B1E] mb-6">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-700 mb-8">
            Em caso de <strong className="text-[#333]">dúvidas</strong>, <strong className="text-[#333]">críticas</strong> ou <strong className="text-[#333]">sugestões</strong>, entre em contato conosco:
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-[850px] overflow-hidden rounded-2xl shadow-lg border-2 border-[#66C845]">
              <img 
                src="/img/abertura_Turma-do-bem_Sorrisos-5.webp" 
                alt="tdb-faq" 
                className="w-full h-auto object-cover"
              />
            </div>
            <a
              href="https://turmadobem.org.br/contato" 
              className="text-xl font-bold text-[#F68B1E] hover:text-[#66C845] underline transition-colors"
            >
              faleconosco@tdb.org.br
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}