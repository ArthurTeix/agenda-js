// nome do arquivo começa com letras maiúsculas pois modelos são classes
const mongoose = require('mongoose')
const validator = require('validator')

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true}
    
})

const LoginModel = mongoose.model("Login", LoginSchema)

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null
    }

    // register -> valida -> cleanUp
    register() {
        this.valida()
        if (this.errors.length > 0) { return }
    }

    valida() {
        this.cleanUp()
        // Validação
        // E-mail deve ser válido
        if (!validator.isEmail(this.body.email)) { this.errors.push("E-mail inválido.") }

        // Senha mínima de 6 char e máximo de 15
        if (this.body.password.length < 6 || this.body.password.length > 15) { this.errors.push("A senha deve conter entre 6 e 15 caracteres.")}

    }

    cleanUp() { 
        for (const key in this.body) { // Vai garantir que tudo no meu req.body é String
            if (typeof this.body[key] !== 'string') { this.body[key] = '' }
        }

        this.body = { // apenas as chaves que quero no DB (csrf não deve subir)
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login
