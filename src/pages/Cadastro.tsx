import { useState } from 'react';

export function Cadastro() {

  // UseStates para controlar os campos do formulário e a mensagem de erro

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [msgErro, setMsgErro] = useState('');

  //  lógica do sistema de cadastro

  const handleCadastro = (event: React.FormEvent) => {
    event.preventDefault(); 

    // Validação de nome com .lenght (min 3) e .trim para evitar espaços em branco

    if (nome.trim().length < 3) {
      setMsgErro("O nome deve ter pelo menos 3 caracteres.");
      return;
    }

    // Validação de email com regex e msg de erro

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setMsgErro("Digite um email válido.");
      return;
    }

    setMsgErro(""); 
    alert("Cadastro realizado com sucesso!");
    setNome('');
    setEmail('');
    setNascimento('');
  };

   // Return do formulário de cadastro

  return (
    <main className="conteudo">
      <section className="index">
        <article>
          <h1>Cadastro</h1>
          <h2>Insira seus dados:</h2>

          <form id="formCadastro" onSubmit={handleCadastro}>
            <label htmlFor="nome">Nome:</label><br />
            <input 
              type="text" 
              id="nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)} 
              required 
            /><br /><br />

            <label htmlFor="nascimento">Data de Nascimento:</label><br />
            <input 
              type="date" 
              id="nascimento" 
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)} 
              required 
            /><br /><br />

            <label htmlFor="email">Email:</label><br />
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            /><br /><br />

            <button type="submit">Enviar</button>

            <p id="erro" style={{ color: 'red', fontWeight: 'bold' }}>
              {msgErro}
            </p>
          </form>
        </article>
      </section>
    </main>
  );
}