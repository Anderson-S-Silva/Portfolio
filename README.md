<div align="center">

# 💼 Portfólio — Anderson Silva

Portfólio pessoal desenvolvido em **React + Vite**, apresentando projetos, qualificações e formas de contato. Interface responsiva, acessível e com tema escuro.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com)

🔗 **[Ver site ao vivo](https://bejewelled-lolly-5cf9b8.netlify.app/)** · [LinkedIn](https://www.linkedin.com/in/anderson-silva-597b78167/) · [GitHub](https://github.com/Anderson-S-Silva)

</div>

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Como rodar localmente](#-como-rodar-localmente)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como adicionar um projeto novo](#-como-adicionar-um-projeto-novo)
- [Deploy](#-deploy)
- [Aprendizados](#-aprendizados)
- [Contato](#-contato)

---

## 🎯 Sobre o projeto

Este é o meu portfólio profissional, reescrito em React para apresentar minha trajetória como **Desenvolvedor Back-End** com foco em APIs, automação, análise de dados e inteligência artificial.

O projeto foi construído com uma **arquitetura orientada a dados**: todo o conteúdo (projetos, experiências, habilidades) fica centralizado em um único arquivo de dados, separado da camada de apresentação. Isso torna a manutenção simples e o código escalável — adicionar um novo projeto não exige tocar em nenhuma marcação.

---

## ✨ Funcionalidades

- 🎨 **Tema escuro** com identidade visual baseada em terminal de desenvolvedor
- ⌨️ **Efeito de digitação** que alterna entre diferentes áreas de atuação
- 🔍 **Filtro de projetos** por categoria (Front-End, Back-End, Dados)
- 📜 **Animações de revelação** conforme o usuário rola a página
- 📱 **Totalmente responsivo**, com menu adaptado para dispositivos móveis
- ♿ **Acessível**: navegação por teclado, atributos ARIA e respeito à preferência de movimento reduzido
- 🚀 **Alta performance**: fundo gerado em CSS (sem vídeos pesados) e imagens com _lazy loading_

---

## 🛠 Tecnologias

| Categoria | Ferramentas |
|---|---|
| **Biblioteca** | React 18 |
| **Build tool** | Vite 5 |
| **Estilização** | CSS3 (variáveis, Grid, Flexbox) |
| **Tipografia** | Sora, Poppins, JetBrains Mono |
| **Ícones** | Font Awesome 6 |
| **Hospedagem** | Netlify |

---

## 🚀 Como rodar localmente

> **Pré-requisito:** [Node.js](https://nodejs.org) versão 18 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/Anderson-S-Silva/Portfolio.git

# 2. Entre na pasta
cd Portfolio

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

O site abrirá em `http://localhost:5173` com _hot reload_ (atualização automática ao salvar).

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Visualiza localmente a versão de produção |

### Imagens

Coloque suas imagens na pasta `public/Img/`. Recomenda-se usar nomes sem espaços ou acentos (ex.: `foto-perfil.png`, `curriculo.pdf`) para evitar problemas em URLs.

---

## 📁 Estrutura do projeto

```
Portfolio/
├── public/
│   └── Img/                 # Imagens e currículo
├── src/
│   ├── main.jsx             # Ponto de entrada da aplicação
│   ├── App.jsx              # Composição dos componentes
│   ├── index.css            # Estilos globais
│   ├── data/
│   │   └── conteudo.js      # Todos os dados do site (projetos, textos…)
│   ├── hooks/
│   │   ├── useDigitacao.js  # Hook do efeito de digitação
│   │   └── useRevelar.jsx   # Hook de animação ao rolar
│   └── components/
│       ├── Header.jsx       # Cabeçalho e navegação
│       ├── Hero.jsx         # Seção de apresentação
│       ├── Sobre.jsx        # Bio e áreas de atuação
│       ├── Qualificacoes.jsx# Experiência, formação e habilidades
│       ├── Projetos.jsx     # Galeria de projetos com filtro
│       ├── Contato.jsx      # Seção de contato
│       └── Footer.jsx       # Rodapé
├── index.html
├── vite.config.js
└── package.json
```

---

## ➕ Como adicionar um projeto novo

Abra `src/data/conteudo.js` e adicione um objeto ao array `projetos`:

```js
{
  id: 6,
  titulo: 'Meu Novo Projeto',
  descricao: 'O que ele faz, em uma frase.',
  imagem: '/Img/meu-projeto.jpeg',
  categoria: 'back', // 'front' | 'back' | 'dados'
  tecnologias: ['Python', 'FastAPI'],
  links: {
    github: 'https://github.com/...',
    online: 'https://...',
  },
}
```

Pronto! O card aparece na galeria e o filtro passa a reconhecê-lo automaticamente — sem editar nenhum componente.

---

## 🌐 Deploy

O projeto está hospedado no **Netlify** com deploy contínuo a partir do GitHub.

1. No painel do Netlify: **Add new site → Import an existing project → GitHub**
2. Configurações de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. A cada `git push` na branch principal, o site é reconstruído e publicado automaticamente.

---

## 📚 Aprendizados

Este projeto consolidou conceitos fundamentais de React:

- **Componentização** — interface dividida em peças independentes e reutilizáveis
- **Props** — o componente `Timeline` é reaproveitado para experiência e formação
- **Estado com `useState`** — filtro de projetos e menu mobile
- **Estado derivado** — a lista filtrada é calculada a partir do estado, sem duplicação
- **`useEffect`** — efeitos colaterais com limpeza adequada
- **Hooks customizados** — lógica reutilizável encapsulada (`useDigitacao`, `useRevelar`)
- **Renderização de listas** — `.map()` com `key` para gerar conteúdo a partir de dados

---

## 📬 Contato

<div align="center">

**Anderson Silva** — Desenvolvedor Back-End

[![Email](https://img.shields.io/badge/Email-anderson.santos.silva@outlook.com.br-D14836?logo=microsoftoutlook&logoColor=white)](mailto:anderson.santos.silva@outlook.com.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Anderson_Silva-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anderson-silva-597b78167/)
[![GitHub](https://img.shields.io/badge/GitHub-Anderson--S--Silva-181717?logo=github&logoColor=white)](https://github.com/Anderson-S-Silva)

</div>

---

<div align="center">
<sub>Feito com 💙 por Anderson Silva</sub>
</div>
