# Turma do Bem — Sprint 4

![Turma do Bem](public/img/logo-turma-do-bem.png)

Aplicação Web desenvolvida para a ONG **Turma do Bem**, com o objetivo de otimizar o processo de agendamento entre pacientes e dentistas voluntários.

---

## Descrição do Projeto

Este website foi desenvolvido como uma proposta de solução tecnológica para a ONG Turma do Bem. O paciente pode consultar horários disponíveis e realizar seu agendamento de forma autônoma, sem depender de um atendente. Os voluntários atualizam sua própria disponibilidade diretamente no sistema, alimentando um calendário centralizado gerenciado pela ONG.

---

## Tecnologias Utilizadas

- **React 19** — biblioteca para construção de interfaces
- **Vite** — ferramenta de build e desenvolvimento rápido
- **TypeScript** — tipagem estática com interfaces, union types e intersection types
- **Tailwind CSS v4** — estilização moderna e responsiva sem CSS externo
- **React Router DOM** — navegação SPA com rotas estáticas e dinâmicas
- **React Hook Form** — gerenciamento eficiente de formulários e validações
- **ViaCEP API** — integração REST para preenchimento automático de endereço
- **Git Flow** — metodologia de versionamento colaborativo

---

## Funcionalidades

- Navegação SPA sem recarregamento de página
- Tema claro/escuro com `useContext`
- Título dinâmico por página com `useEffect`
- Formulários com validação e integração com API ViaCEP
- Rotas dinâmicas com passagem de parâmetros (`/voluntario/:id`)
- Layout responsivo para Mobile, Tablet e Desktop
- Página de Integrantes com links para GitHub e LinkedIn

---

## Estrutura de Pastas

```text
src/
  components/       # Componentes reutilizáveis (Header, Footer, App)
  context/          # Contexto global (ThemeContext)
  pages/            # Páginas da aplicação
  types/            # Tipos TypeScript (interfaces, union types)
  index.css         # Importação do Tailwind CSS
  main.tsx          # Ponto de entrada
public/
  img/              # Imagens do projeto
```

---

## Como Executar Localmente

**1. Clonar o repositório:**
```bash
git clone https://github.com/G-Barca/sprint3.git
cd sprint3
```

**2. Instalar as dependências:**
```bash
npm install
```

**3. Iniciar o servidor de desenvolvimento:**
```bash
npm run dev
```

**4.** Acesse `http://localhost:5173` no navegador.

---

## Como Usar

- **Repositório GitHub:** https://github.com/G-Barca/sprint3
- **Deploy Vercel:** https://sprint3-blond.vercel.app
- **Vídeo de apresentação:** https://youtu.be/5lybGsyNGgY

---

## Autores

| Nome | RM | Turma |
|---|---|---|
| Guilherme Barca Nascimento Silva | RM568517 | 1TDSPB |
| Juliana de Souza Rodrigues Marques | RM566795 | 1TDSPB |
| Lucas Gomes Kosio | RM566828 | 1TDSPB |

