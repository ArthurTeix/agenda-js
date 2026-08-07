exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
    next() // <- NUNCA ESQUECER
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) { // se ocorrer qualquer erro
        return res.render('404')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => { // token da minha url
    res.locals.csrfToken = req.csrfToken()
    next()
}

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para cadastrar contatos')
        req.session.save(() => res.redirect('/')) // sempre que redirecionar, é bom salvar a sessão para garantir que salvou
        return
    }

    next()
}
