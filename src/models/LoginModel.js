// nome do arquivo começa com letras maiúsculas pois modelos são classes
const mongoose = require('mongoose')

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
    }

    valida() {
        cleanUp()
        // Validação
        // E-mail deve ser válido
        // Senha mínima de 6 char


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
