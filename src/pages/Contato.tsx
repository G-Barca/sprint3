import { useState } from 'react';

export function Contato() {

  // UseStates para controlar os campos do formulário e a mensagem de erro

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [msgErro, setMsgErro] = useState('');

  // Lógica do sistema de cadastro

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 

    // Validação de nome 

    if (nome.trim().length < 3) {
      setMsgErro("O nome deve ter pelo menos 3 caracteres.");
      return;
    }

    // Validação de CPF 
    
    if (cpf.replace(/\D/g, '').length !== 11) {
      setMsgErro("Digite um CPF válido com 11 dígitos.");
      return;
    }

    // Validação de email 

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setMsgErro("Digite um email válido.");
      return;
    }

    setMsgErro("");
    alert("Informações enviadas com sucesso!");
    setNome('');
    setCpf('');
    setEmail('');
  };

  return (
    <main className="conteudo">
      <section className="contato">
        <article>
          <h2>Insira suas informações de contato:</h2>
      
          <form id="formContato" onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label><br />
            <input 
              type="text" 
              id="nome" 
              name="nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required 
            /><br /><br />

            <label htmlFor="cpf">CPF:</label><br />
            <input 
              type="text" 
              id="cpf" 
              name="cpf" 
              maxLength={14} 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required 
            /><br /><br />

            <label htmlFor="email">Email:</label><br />
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            /><br /><br />

            <button type="submit">Enviar</button>

            
            <p id="erro" style={{ color: 'red', fontWeight: 'bold' }}>
              {msgErro}
            </p>
          </form>

          <h2>Fale Conosco</h2>
          <img 
            src="/img/tratamento.jpg" 
            alt="Tratamento Odontológico" 
            width="400" 
            height="300" 
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