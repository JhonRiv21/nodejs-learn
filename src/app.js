const express = require('express')
const config = require('./config')
const morgan = require('morgan')

const app = express()
const clients = require('./modules/clients/routes.js')

app.use(morgan('dev'))

app.set('port', config.app.port)

app.use('/api/clientes', clients)

module.exports = app
