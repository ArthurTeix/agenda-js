// LINHA QUE DIZ AO NODE QUAIS DNS USAR (SEMPRE UTILIZAR ATE CORREÇÃO DE BUG DO PROPRIO NODE)
// SEMPRE DEIXAR NO TOPO DO ARQUIVO SERVER
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)  
    .then(() => {
        app.emit('Pronto para conexão')
    })
    .catch(e => console.log(e))

const session = require('express-session') 
const { MongoStore } = require('connect-mongo')
const flash = require('connect-flash')
const routes = require('./router')
const path = require('path')
const helmet = require('helmet') // extensão de proteção http
const csrf = require('csurf') 
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware.js')

// configurações dos cookies salvos
const sessionOptions = session({
    secret: 'texto que ninguém vai ler',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(helmet())

app.use(sessionOptions)
app.use(express.json())
app.use(flash())

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.use(csrf()) // deve ser usado antes das rotas, pois vai realizar uma checagem de token sempre antes de direcionar   

// Meus Middlewares
app.use(middlewareGlobal)
app.use(csrfMiddleware)  
app.use(checkCsrfError)

app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.on('Pronto para conexão', () => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000')
        console.log(`Acessar http://localhost:3000`)
    })
})
