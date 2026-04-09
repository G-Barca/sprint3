export function FAQ() {
  return (
    <main className="conteudo">
      <section className="index">
        <article className="faq">
          <h2>Perguntas Frequentes</h2>
          <p>
            Em caso de <strong>dúvidas</strong>, <strong>críticas</strong> ou <strong>sugestões</strong>, entre em contato conosco:
          </p>
          
          <div className="email-contato">
            <p>
              <img 
                src="/img/abertura_Turma-do-bem_Sorrisos-5.webp" 
                alt="tdb-faq" 
                style={{ height: '450px' }} 
              />
            </p>
            <a href="https://turmadobem.org.br/contato">faleconosco@tdb.org.br</a>
          </div>
        </article>
      </section>
    </main>
  );
}