export function Integrantes() {
  return (
    <main className="conteudo">
      <section className="index">
        <article className="integrantesimg">
          <div className="githubs">

            {/* Guilherme */}
            <div className="pessoa">
              <a href="https://github.com/G-Barca" target="_blank" rel="noreferrer">
                <img src="/img/symbole-github-orange.png" alt="Guilherme Barca Nascimento Silva – RM568517" />
              </a>
              <strong>
                <p>Guilherme Barca Nascimento Silva <br /> RM568517</p> 
                <p> TURMA: 1TDSPB</p>
              </strong>
            </div>

            {/* Juliana */}
            <div className="pessoa">
              <a href="https://github.com/julianasrmarques" target="_blank" rel="noreferrer">
                <img src="/img/symbole-github-orange.png" alt="Juliana de Souza Rodrigues Marques – RM566795" />
              </a>
              <strong>
                <p>Juliana de Souza Rodrigues Marques <br />RM566795</p>
                <p> TURMA: 1TDSPB</p>
              </strong>
            </div>

            {/* Lucas */}
            <div className="pessoa">
              <a href="https://github.com/lucasgkosio" target="_blank" rel="noreferrer">
                <img src="/img/symbole-github-orange.png" alt="Lucas Gomes Kosio – RM566828" />
              </a>
              <strong>
                <p>Lucas Gomes Kosio <br /> RM566828</p>
                <p> TURMA: 1TDSPB</p>
              </strong>
            </div>

          </div>
        </article>
      </section>
    </main>
  );
}