# ConectaSocial

## Sobre o projeto

O ConectaSocial é uma plataforma web desenvolvida para apresentar projetos sociais e facilitar a participação de pessoas interessadas em ações de voluntariado e apoio social.

O projeto foi desenvolvido como parte das atividades práticas da graduação em Sistemas de Informação, evoluindo de uma interface estática para uma aplicação web dinâmica, responsiva e com recursos de interação.

A aplicação utiliza uma arquitetura baseada em JavaScript modular, permitindo navegação sem recarregamento completo da página, utilização de templates dinâmicos, validação de formulário e armazenamento local de dados.

## Objetivo

O objetivo do projeto é desenvolver uma plataforma web acessível e responsiva que conecte pessoas a iniciativas sociais.

A aplicação permite conhecer os projetos disponíveis, visualizar informações detalhadas sobre cada iniciativa e realizar um cadastro para demonstrar interesse em participar.

## Funcionalidades

- Navegação entre páginas utilizando uma SPA.
- Navegação pelo histórico do navegador com History API.
- Renderização dinâmica de conteúdo por meio de templates JavaScript.
- Apresentação de projetos sociais.
- Visualização de detalhes dos projetos em modais.
- Menu responsivo para dispositivos móveis.
- Formulário de cadastro.
- Validação dos campos do formulário.
- Persistência dos dados utilizando `localStorage`.
- Recuperação dos dados armazenados após o carregamento da aplicação.
- Tratamento de dados inválidos armazenados no `localStorage`.
- Feedback visual utilizando SweetAlert2.
- Interface responsiva.
- Recursos de acessibilidade.
- Validação do código JavaScript utilizando ESLint.
- Publicação automática no GitHub Pages por meio do GitHub Actions.

## Tecnologias utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript
- Flexbox
- CSS Grid
- Media Queries
- Web Storage API (`localStorage`)
- History API
- HTML `<dialog>`

### Ferramentas

- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Visual Studio Code
- ESLint
- npm

### Biblioteca externa

- SweetAlert2

A biblioteca SweetAlert2 é utilizada para apresentar mensagens de feedback ao usuário após ações realizadas no formulário.

## Estrutura do projeto

```text
ConectaSocial_EP2/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── html/
│   └── index.html
├── css/
│   └── style.css
├── imagens/
│   └── logo.png
├── js/
│   ├── app.js
│   ├── form.js
│   ├── menu.js
│   ├── projects.js
│   ├── router.js
│   ├── script.js
│   ├── storage.js
│   ├── templates.js
│   └── ui.js
├── cadastro.html
├── index.html
├── projetos.html
├── eslint.config.mjs
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
