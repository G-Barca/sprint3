export function Sobre() {
  return (
    <main className="flex-grow max-w-[900px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <article className="space-y-8">
          
          <div className="flex justify-center">
            <img src="/img/tdb.png" alt="Turma do Bem" className="max-w-[900px] md:max-w-[300px] h-auto rounded-lg shadow-md" />
          </div>
          
          <div className="text-center border-b pb-6 border-gray-100">
            <h1 className="text-3xl font-extrabold text-[#F68B1E]">Ideia do projeto</h1>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
            <p className="border-l-4 border-[#66C845] pl-4 italic bg-gray-50 p-4 rounded-r-lg">
              A ideia do projeto consiste em desenvolver um website para pacientes que desejam agendar e consultar horários disponíveis pelo próprio site. Voluntários atualizam os horários que podem atender.
            </p>
            
            <p>
              A ONG visualiza tudo num calendário central, onde pode manter a organização da agenda dos profissionais. 
              As agendas dos dentistas ficam disponíveis no site, e o paciente pode escolher o dia e horário de sua preferência e fazer o agendamento sem depender de um atendente. 
            </p>
            
            <p>
Dessa forma, buscamos representar o início de uma solução tecnológica que poderia futuramente ser integrada a um sistema maior de gestão para a ONG Turma do Bem. O site foi desenvolvido utilizando conceitos básicos de <strong>Front-end</strong>, migrados para <strong>React com TypeScript</strong>, garantindo uma performance melhor e componentes reutilizáveis.            </p>
          </div>
        </article>
      </section>
    </main>
  );
}