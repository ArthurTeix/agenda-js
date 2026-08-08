const Contato = require('../models/ContatoModel.js')

exports.index = (req, res) => {
    res.render('contato', {contato: {}})
}

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body)
        await contato.register()
    
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(function() {
                return res.redirect('/contato/index')
            })
            return
        }
    
        req.flash('success', 'Contato registrado com sucesso.')
        req.session.save(function() {
            console.log('cadastrado')
            return res.redirect(`/contato/index/${contato.contato._id}`)
        })
        return
    } catch (err) {
        console.log(err)
        return res.render('404')
    }
}

exports.editIndex = async (req, res) => {
    if (!req.params.id) { return res.render('404') }

    const contato = await Contato.buscaPorId(req.params.id)
    if (!contato) { return res.render('404') }

    res.render('contato', { contato })
}