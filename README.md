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
- Navegação por teclado com foco visual.
- Validação do código JavaScript utilizando ESLint.
- Preparação de arquivos otimizados para produção.
- Publicação automática no GitHub Pages por meio do GitHub Actions.

## Otimização e preparação para produção

Nesta etapa, o projeto foi preparado para produção com otimizações nos arquivos estáticos da aplicação.

Foram realizadas as seguintes melhorias:

- Conversão da logo de PNG para WebP.
- Redução do tamanho da imagem utilizando a biblioteca Sharp.
- Minificação do HTML.
- Minificação dos arquivos JavaScript.
- Minificação do CSS.
- Organização dos arquivos otimizados no diretório `dist/`.
- Ajuste dos caminhos dos recursos para a versão de produção.
- Teste local da versão de produção antes do deploy.

A imagem otimizada foi gerada por meio de um script Node.js utilizando a biblioteca Sharp.

Os arquivos preparados para produção são armazenados no diretório:

```text
dist/
```

A utilização dos arquivos minificados e da imagem otimizada tem como objetivo reduzir o tamanho dos recursos enviados ao navegador e melhorar o carregamento da aplicação.

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

### Acessibilidade

- HTML semântico
- Landmarks HTML (`header`, `nav`, `main` e `footer`)
- Atributos WAI-ARIA
- Navegação por teclado
- `:focus-visible`
- Labels associados aos campos de formulário
- `fieldset` e `legend`
- Texto alternativo em imagens
- Lighthouse para avaliação de acessibilidade

### Ferramentas

- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Visual Studio Code
- ESLint
- npm
- Sharp
- html-minifier-terser
- Terser

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
│   ├── logo.png
│   └── logo-otimizada.webp
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
├── dist/
│   ├── index.html
│   ├── css/
│   │   └── style.min.css
│   ├── imagens/
│   │   └── logo-otimizada.webp
│   └── js/
│       ├── app.js
│       ├── form.js
│       ├── menu.js
│       ├── projects.js
│       ├── router.js
│       ├── script.js
│       ├── storage.js
│       ├── templates.js
│       └── ui.js
├── optimize-image.js
├── minify-html.js
├── minify-js.js
├── cadastro.html
├── index.html
├── projetos.html
├── eslint.config.mjs
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Organização dos arquivos JavaScript

Os arquivos JavaScript foram separados de acordo com suas responsabilidades:

- `app.js` — inicialização da aplicação e renderização das páginas.
- `router.js` — controle da navegação da SPA e History API.
- `templates.js` — criação dos templates das páginas.
- `projects.js` — funcionamento dos projetos e modais.
- `form.js` — validação e funcionamento do formulário.
- `storage.js` — armazenamento e recuperação dos dados no `localStorage`.
- `menu.js` — funcionamento do menu responsivo.
- `ui.js` — mensagens de feedback utilizando SweetAlert2.
- `script.js` — funcionalidades complementares da aplicação.

Os scripts de preparação para produção ficam na raiz do projeto:

- `optimize-image.js` — geração da imagem otimizada em WebP.
- `minify-html.js` — geração do HTML minificado.
- `minify-js.js` — geração dos arquivos JavaScript minificados.

## Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:

- Git
- Node.js
- npm
- Navegador atualizado
- Visual Studio Code ou outro editor de código

## Instalação

Clone o repositório:

```bash
git clone https://github.com/alinecostadeoliveira1-oss/ConectaSocial-EP2.git
```

Entre na pasta do projeto:

```bash
cd ConectaSocial-EP2
```

Instale as dependências:

```bash
npm install
```

Para executar a aplicação localmente, utilize um servidor local, como o Live Server do Visual Studio Code.

Após iniciar o servidor, abra o endereço fornecido pelo servidor no navegador.

## Validação e testes

O projeto foi validado durante o desenvolvimento utilizando testes manuais no navegador e ferramentas de análise de código.

Foram realizados testes de:

- Navegação entre as páginas da SPA.
- Funcionamento do menu responsivo.
- Abertura e fechamento dos modais.
- Validação do formulário.
- Armazenamento dos dados utilizando `localStorage`.
- Recuperação dos dados armazenados.
- Navegação utilizando teclado.
- Funcionamento da aplicação em diferentes tamanhos de tela.
- Funcionamento da versão otimizada em `dist/`.
- Validação do JavaScript utilizando ESLint.
- Avaliação de acessibilidade utilizando Lighthouse.

A aplicação apresentou 100/100 no requisito de acessibilidade do Lighthouse após os ajustes realizados.

## Versionamento e GitFlow

O projeto utiliza Git e GitHub para controle de versão, seguindo uma organização baseada no GitFlow.

A branch `main` representa a versão estável do projeto.

A branch `develop` é utilizada para o desenvolvimento das novas funcionalidades.

As funcionalidades específicas são desenvolvidas utilizando branches no padrão `feature/nome-da-funcionalidade`.

Também foram utilizados Pull Requests para revisão e integração das alterações.

O projeto utiliza versionamento semântico:

- `v1.0.0` — versão inicial consolidada do projeto.
- `v2.0.0` — implementação da arquitetura SPA e funcionalidades dinâmicas.
- `v2.0.1` — configuração do deploy automático no GitHub Pages.

## Deploy

O projeto utiliza GitHub Actions para automatizar a publicação no GitHub Pages.

O workflow de deploy está localizado em:

```text
.github/workflows/deploy.yml
```

A versão preparada para produção utiliza os arquivos presentes no diretório `dist/`.

O deploy é executado automaticamente após alterações na branch `main`.

## Repositório

O código-fonte do projeto está disponível no GitHub:

https://github.com/alinecostadeoliveira1-oss/ConectaSocial-EP2

A aplicação está publicada no GitHub Pages:

https://alinecostadeoliveira1-oss.github.io/ConectaSocial-EP2/

## Autora

Aline Costa de Paula

Projeto desenvolvido como parte das atividades práticas da graduação em Sistemas de Informação.