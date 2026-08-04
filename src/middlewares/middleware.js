exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "Testando variável local"
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
