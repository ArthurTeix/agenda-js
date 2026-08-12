# 📒 Agenda de Contatos

Uma aplicação web de **agenda de contatos**, desenvolvida com **Node.js e Express**, com autenticação de usuários e um CRUD completo para gerenciamento de contatos.

O acesso à agenda é protegido: para utilizar as funcionalidades da aplicação, o usuário precisa realizar seu **cadastro e login**.

🔗 **[Acessar aplicação](https://agendadecontatos.onrender.com)**

---

## 📖 Sobre o Projeto

O **Agenda de Contatos** foi desenvolvido com o objetivo de colocar em prática conceitos de desenvolvimento web **Full Stack**, principalmente a construção de aplicações utilizando **Express.js**, integração com **MongoDB** e operações de **CRUD**.

A aplicação permite que usuários criem suas próprias contas, realizem login e gerenciem seus contatos de forma completa.

Além do CRUD, o projeto também conta com autenticação, gerenciamento de sessões, validações de dados e organização do código em diferentes responsabilidades.

---

## 🚀 Tecnologias Utilizadas

### 🎨 Front-end

* **CSS3**
* **JavaScript**
* **EJS** — criação das páginas e templates
* **Bootstrap** — framework CSS para estilização e responsividade

### ⚙️ Back-end

* **Node.js** — ambiente de execução JavaScript
* **Express.js** — framework utilizado na construção do servidor
* **Mongoose** — modelagem e comunicação com o MongoDB
* **Webpack** — empacotamento dos arquivos do front-end
* **Babel** — transpilação de JavaScript

### 🗄️ Banco de Dados

* **MongoDB** — banco de dados NoSQL
* **Mongoose** — ODM utilizado para trabalhar com o MongoDB

### 🔐 Autenticação e Segurança

* **bcryptjs** — hash e verificação de senhas
* **express-session** — gerenciamento de sessões
* **connect-mongo** — armazenamento das sessões no MongoDB
* **csurf** — proteção contra CSRF
* **helmet** — configuração de headers de segurança
* **validator** — validação e sanitização de dados
* **dotenv** — gerenciamento de variáveis de ambiente

---

## ✨ Funcionalidades

### 👤 Usuários

* Cadastro de novos usuários
* Login de usuários
* Logout
* Autenticação através de sessões
* Proteção das páginas que exigem autenticação
* Validação dos dados fornecidos pelo usuário
* Senhas armazenadas de forma protegida através de hash

### 📇 Contatos

A aplicação possui um **CRUD completo**:

* ➕ **Create** — cadastrar novos contatos
* 👁️ **Read** — visualizar os contatos cadastrados
* ✏️ **Update** — editar informações dos contatos
* 🗑️ **Delete** — excluir contatos

Cada usuário possui acesso somente aos seus próprios contatos.

---

## 📂 Estrutura do Projeto

```text
agenda-js/
│
├── frontend/
│   ├── assets/
│   │   └── css/
│   └── index.js
│
├── public/
│   └── assets/
│       └── js/
│
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   └── views/
│
├── .gitignore
├── package.json
├── package-lock.json
├── router.js
├── server.js
└── webpack.config.js
```

### Organização

* **`controllers/`** — contém a lógica responsável pelo funcionamento das funcionalidades da aplicação.
* **`middlewares/`** — reúne middlewares utilizados no processamento das requisições, autenticação e segurança.
* **`models/`** — contém os modelos utilizados para representar e manipular os dados do MongoDB.
* **`views/`** — páginas e templates da aplicação utilizando EJS.
* **`frontend/`** — arquivos relacionados ao desenvolvimento do front-end.
* **`public/`** — arquivos públicos disponibilizados pela aplicação.
* **`router.js`** — definição e organização das rotas.
* **`server.js`** — configuração e inicialização do servidor.
* **`webpack.config.js`** — configuração do Webpack para o front-end.

---

## 💻 Como Executar

### Pré-requisitos

Antes de começar, você precisa ter:

* [Node.js](https://nodejs.org/)
* Conta no MongoDB Atlas
* Git

### 1. Clone o repositório

```bash
git clone https://github.com/ArthurTeix/agenda-js.git
```

### 2. Acesse o diretório

```bash
cd agenda-js
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
CONNECTIONSTRING=sua_string_de_conexao_mongodb
```

> Substitua os valores pelos dados da sua configuração do MongoDB

### 5. Execute o projeto

Para iniciar o servidor:

> Será necessário dois terminais

```bash
npm start
```

Para executar o Webpack em modo de desenvolvimento:

```bash
npm run dev
```

Após iniciar o servidor, acesse:

```text
http://localhost:3000
```

---

## 📚 O que aprendi

O desenvolvimento deste projeto foi uma oportunidade para colocar em prática conceitos importantes do desenvolvimento **Back-end e Full Stack**.

Durante o desenvolvimento, pude aprofundar meus conhecimentos em:

* Construção de aplicações utilizando **Express.js**
* Criação e organização de rotas
* Desenvolvimento de um **CRUD completo**
* Integração entre **Express e MongoDB**
* Utilização do **Mongoose** para modelagem e manipulação dos dados
* Implementação de **autenticação e gerenciamento de sessões**
* Hash de senhas utilizando **bcrypt**
* Criação e utilização de **middlewares**
* Validação e tratamento de dados recebidos pelo usuário
* Utilização do **Bootstrap** para construção da interface
* Organização de projetos seguindo responsabilidades separadas
* Utilização de **variáveis de ambiente**
* Aplicação de práticas de segurança em aplicações web
* Uso do **Webpack e Babel** no fluxo de desenvolvimento
* Desenvolvimento de uma aplicação completa conectando **front-end, back-end e banco de dados**

---
