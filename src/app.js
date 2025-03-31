const express = require("express");
const config = require("./config");

const app = express();
const clients = require('./modules/clients/routes.js')

app.set('port', config.app.port);

app.use('/api/clientes', clients);

module.exports = app;