# Projeto Turma do Bem - Sprint 3


Integrantes do Grupo da turma 1TDSPB:

Guilherme Barca Nascimento Silva - RM568517 

Juliana de Souza Rodrigues Marques - RM566795 

Lucas Gomes Kosio - RM566828 

## Como Executar Localmente:

Clonar o repositório:

Bash
git clone [https://github.com/G-Barca/sprint3.git]

Entrar na pasta do projeto:

Bash
cd [Nome da pasta]

Instalar as dependências:

Bash
npm install
Iniciar o servidor de desenvolvimento:

Bash
npm run dev
Abra o navegador no endereço: http://localhost:5173








## Descrição do Projeto:

Este website foi desenvolvido como uma proposta de solução tecnológica para a ONG **Turma do Bem**. O objetivo principal é otimizar o processo de agendamento entre pacientes e dentistas voluntários.
 A ideia central consiste em permitir que voluntários atualizem sua própria disponibilidade de horários diretamente no sistema. Esses dados alimentam um calendário centralizado onde a ONG mantém a organização da agenda. Pelo site, o paciente pode consultar os horários disponíveis e realizar seu agendamento de forma autônoma, sem depender de um atendente.
 Este protótipo representa o início de uma solução que busca garantir melhor performance e escalabilidade através do uso de componentes reutilizáveis.

## Tecnologias Utilizadas:

- **React**: Biblioteca para construção de interfaces.
- **TypeScript**: Adição de tipagem estática para maior segurança no código.
- **Tailwind CSS**: Framework CSS para estilização moderna e responsiva.
- **React Hook Form**: Gestão eficiente de formulários e validações.
- **Git Flow**: Metodologia de organização de branches e fluxo de trabalho.
- **Vite**: Ferramenta de build e desenvolvimento rápido.

## Estrutura de Pastas Principal:

```text
src/
  assets/         # Recursos estáticos (estilos globais e imagens)
  components/     # Componentes reutilizáveis (Header, Footer, etc.)
  pages/          # Páginas principais do sistema (Home, Integrantes, etc.)
  App.tsx         # Componente principal de rotas
  main.tsx        # Ponto de entrada da aplicação


