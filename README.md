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

