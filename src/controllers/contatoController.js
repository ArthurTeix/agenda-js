// Esse arquivo é responsável por renderizar minhas rotas, com os métodos e funções do model referente, garantir as funcionalidades e verificações da page
const Contato = require('../models/ContatoModel.js')

exports.index = (req, res) => {
    res.render('contato', {contato: {}})
}

// Parte responsável por listar os contatos
// CREATE (crud)
exports.register = async (req, res) => { // toda função que vá fazer buscas no BD deve ser async
    try { // sempre envolvido em try/catch para casos de erro
        const contato = new Contato(req.body) // classe herdada de ContatoModel
        await contato.register() // função herdada do model
    
        if (contato.errors.length > 0) { // se houver algum erro, deve ser emitido
            req.flash('errors', contato.errors)
            req.session.save(function() { // salvando sempre a sessão para salvar os dados
                return res.redirect('/contato/index')
            })
            return
        }
    
        req.flash('success', 'Contato registrado com sucesso.')
        req.session.save(function() {
            return res.redirect(`/`)
        })
        return
    } catch (err) { // em caso de algum erro, deve me lançar o erro no console e render na 404
        console.log(err)
        return res.render('404')
    }
}

exports.editIndex = async (req, res) => {
    if (!req.params.id) { return res.render('404') } // se não tiver id, não pode editar (pois não existe)

    const contato = await Contato.buscaPorId(req.params.id) // busca no banco, logo é promises (await)
    if (!contato) { return res.render('404') } 

    res.render('contato', { contato }) 
}

// UPDATE (crud)
exports.edit = async (req, res) => {
    try {
        if (!req.params.id) { return res.render('404') }
    
        const contato = new Contato(req.body)
        await contato.edit(req.params.id) // deve editar pelo id, para garantir identificação
    
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(function() {
                return res.redirect(`/contato/index/${req.params.id}`) // redirecionando para a mesma página em caso de erro, para facilitar, porém com flash de erro
            })
            return
        }

        req.flash('success', 'Contato atualizado com sucesso.')
        req.session.save(function() {
            return res.redirect(`/`)
        })
        return
    } catch(err) {
        console.log(err)
        res.render('404')
    }
}

//DELETE (crud)
exports.delete = async (req, res) => {
    if (!req.params.id) { return res.render('404') }

    const contato = await Contato.delete(req.params.id) // deletando contato pelo id, para garantir
    if (!contato) { return res.render('404') }

    req.flash('success', 'Contato deletado com sucesso.')
    req.session.save(function() {
        return res.redirect(`/`)
    })
    return
}