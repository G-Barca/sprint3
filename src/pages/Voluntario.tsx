import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Voluntario() {
  useEffect(() => {
    document.title = 'Voluntário | Turma do Bem';
  }, []);

  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <article className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold text-[#F68B1E] mb-6">Área do Voluntário</h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl">
            Espaço reservado para os dentistas, voluntários e doadores entenderem um pouco mais a respeito do projeto.
          </p>

          <div className="w-full flex justify-center mb-10">
            <img
              className="rounded-2xl shadow-xl border-4 border-[#66C845] max-w-full md:max-w-[500px] h-auto transition-transform hover:scale-105 duration-300"
              src="/img/seja-dentista-voluntario-turma-do-bem.png"
              alt="Seja voluntário"
            />
          </div>

          <h2 className="text-2xl font-bold text-[#333] mb-6">Nossos Voluntários</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((id) => (
              <Link
                key={id}
                to={`/voluntario/${id}`}
                className="bg-[#F68B1E] text-white font-bold py-4 px-6 rounded-xl border-2 border-[#333] hover:bg-[#66C845] transition-all duration-300 hover:scale-105"
              >
                Ver Voluntário {id}
              </Link>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}