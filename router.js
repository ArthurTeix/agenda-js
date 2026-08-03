const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController.js')

const contatoController = require('./src/controllers/contatoController.js')

route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

route.get('/contato', contatoController.paginaInicial)

module.exports = route  
