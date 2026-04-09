export function Cadastro() {
  return (
    <main className="conteudo">
      <section className="index">
        <article>
          <h1>Cadastro</h1>
          <h2>Insira seus dados:</h2>

          <form id="formCadastro">
            <label htmlFor="nome">Nome:</label><br />
            <input type="text" id="nome" name="nome" required /><br /><br />

            <label htmlFor="nascimento">Data de Nascimento:</label><br />
            <input type="date" id="nascimento" name="nascimento" required /><br /><br />

            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />

            <button type="submit">Enviar</button>

            <p id="erro" style={{ color: 'red', fontWeight: 'bold' }}></p>
          </form>
        </article>
      </section>
    </main>
  );
}