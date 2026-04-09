export function Contato() {
  return (
    <main className="conteudo">
      <section className="contato">
        <article>
          <h2>Insira suas informações de contato:</h2>
      
          <form id="formContato">
            <label htmlFor="nome">Nome:</label><br />
            <input type="text" id="nome" name="nome" required /><br /><br />

            <label htmlFor="cpf">CPF:</label><br />
            <input type="text" id="cpf" name="cpf" maxLength={14} required /><br /><br />

            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />

            <button type="submit">Enviar</button>

            <p id="erro" style={{ color: 'red', fontWeight: 'bold' }}></p>
          </form>

          <h2>Fale Conosco</h2>
          <img 
            src="/img/tratamento.jpg" 
            alt="Tratamento Odontológico" 
            width="700" 
            height="400" 
          />

          <address>
            <p>
              <strong>| Rua Maurício Francisco Klabin, 449 Vila Mariana, São Paulo – SP, 04120-020 |</strong>
            </p>

            <strong>Fone: +55 (11) 5084-7276 |</strong><br />
            <strong>Presidente: turmadobem@tdb.org.br |</strong><br />
            <strong>Comunicação: comunicacao@tdb.org.br |</strong>
          </address>
        </article>
      </section>
    </main>
  );
}