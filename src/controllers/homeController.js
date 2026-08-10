// Esse arquivo é responsável por renderizar minhas rotas, com os métodos e funções do model referente, garantir as funcionalidades e verificações da page
const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos() // funcionalidade READ, vai buscar os contatos e depois renderizar a página já com os contatos listados
    res.render('index', { contatos })
} 
