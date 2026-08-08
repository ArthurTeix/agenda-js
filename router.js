const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController.js')
const loginController = require('./src/controllers/loginController.js')
const contatoController = require('./src/controllers/contatoController.js')

const { loginRequired } = require('./src/middlewares/middleware.js') // garantir que o user tá logado

// Rotas da home (index)
route.get('/', homeController.index)

// Rotas de login
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)

// Rotas de contato
route.get('/contato/index', loginRequired, contatoController.index) // garantir que apenas cadastrem contatos quem está logado
route.post('/contato/register', contatoController.register)
route.get('/contato/index/:id', contatoController.editIndex)

module.exports = route  
