const Login = require('../models/LoginModel.js')

exports.index = (req, res) => {
    res.render('login')
}

exports.register = (req, res) => {
    const login = new Login(res.body)
    login.register()
    res.send(req.body)
}
