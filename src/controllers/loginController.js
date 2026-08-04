exports.index = (req, res) => {
    res.render('login')
}

exports.register = (req, res) => {
    res.send('Olá, aqui é a rota de cadastro')
}