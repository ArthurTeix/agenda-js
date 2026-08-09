const Login = require('../models/LoginModel.js')

exports.index = (req, res) => {
    return res.render('login')
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.register()
    
        if (login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(function() {
                return res.redirect('/login/index')
            })
            return
        }
        req.flash('success', 'Seu usuário foi cadastrado com sucesso.')
        req.session.save(function() {
            return res.redirect('/login/index')
        })
        return
    } catch(err) {
        console.log(err)
        res.render('404')
    }
}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.login()
    
        if (login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(function() {
                return res.redirect('/login/index')
            })
            return
        }

        req.flash('success', 'Você entrou no sistema.')
        req.session.user = login.user
        req.session.save(function() {
            return res.redirect('/')
        })
        return
    } catch(err) {
        console.log(err)
        res.render('404')
    }
}

exports.logout = async (req, res) => { 
    req.session.destroy() // quebra a sessão (sai dela)
    res.redirect('/') // redireciona para a home, para se quiser entrar novamente
}
