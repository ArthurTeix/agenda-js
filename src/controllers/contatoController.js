const Contato = require('../models/ContatoModel.js')

exports.index = (req, res) => {
    res.render('contato')
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
            return res.redirect('/contato/index')
        })
        return
    } catch (err) {
        console.log(err)
        return res.render('404')
    }
}