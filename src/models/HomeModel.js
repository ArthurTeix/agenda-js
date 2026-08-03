// nome do arquivo começa com letras maiúsculas pois modelos são classes
const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
    descricao: String
})

const HomeModel = mongoose.model("Home", HomeSchema)
