// Esse arquivo é responsável por renderizar minhas rotas, com os métodos e funções do model referente, garantir as funcionalidades e verificações da page
const Login = require('../models/LoginModel.js')

exports.index = (req, res) => {
    res.render('login')
}

// responsável por criar os logins na base de dados
exports.register = async (req, res) => {
    try {
        const login = new Login(req.body) 
        await login.register() // funcionalidade de criar cadastro no DB
    
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

// responsável por logar os já cadastrados
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

// responsável por sair da sessão
exports.logout = async (req, res) => { 
    req.session.destroy() // quebra a sessão (sai dela)
    res.redirect('/') // redireciona para a home, para se quiser entrar novamente
}
