export function Home() {
  return (
    <main className="conteudo">
      <section className="index">
        <article>
          <h2>Ações:</h2>

          <div className="acoes">
            {/* Ações da Turma do Bem */}
            <div className="acao">
              <div className="imagem">
                <img src="/img/dentista-do-bem-1.png" alt="Dentista voluntário" />
              </div>
              <p className="dentistatext">
                O Dentista do Bem é o principal programa da TdB, destinado a crianças e adolescentes em situação de
                vulnerabilidade social na faixa dos 11 a 17 anos.
                Os nossos beneficiários possuem graves problemas bucais e não têm condições financeiras de pagar pelo
                tratamento.
                Após serem selecionados e entrarem no programa, os jovens recebem atendimento odontológico gratuito –
                independente da complexidade dos casos – até completarem 18 anos.
              </p>
            </div>

            {/* Ação Apolônias do Bem */}
            <div className="acao">
              <div className="imagem">
                <img className="imgsmenu" src="/img/apolonias-do-bem.png" alt="Apolônias do Bem" />
              </div>
              <p>
                Apolônias do Bem oferece tratamento odontológico gratuito para mulheres cis e trans que vivenciaram
                situações de violência e tiveram a dentição afetada pelas agressões.
                As beneficiárias são selecionadas através de triagens em que passam por um rápido exame oral, não
                invasivo, e respondem a uma ferramenta científica que mede o impacto da saúde bucal na qualidade de vida
                de uma pessoa.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}