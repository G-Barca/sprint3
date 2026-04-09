import { Link } from 'react-router-dom';

export function Contato() {
  return (
    <main className="conteudo">
      <section className="contato">
        <article>
          <h1>Entre em contato</h1>
          <p>Dúvidas ou sugestões? Preencha o formulário abaixo:</p>

          <form className="form-contato">
            <div className="campo">
              <label htmlFor="nome">Nome Completo:</label>
              <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
            </div>

            <div className="campo">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" placeholder="seu@email.com" required />
            </div>

            <div className="campo">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" rows={5} placeholder="Como podemos ajudar?"></textarea>
            </div>

            <button type="submit" className="btn-enviar">Enviar Mensagem</button>
          </form>
        </article>
      </section>
    </main>
  );
}