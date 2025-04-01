import { app as _app } from './config.mjs'
import clients from './modules/clients/routes.mjs'
import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('tiny'))

app.set('port', _app.port)

app.use('/api/clientes', clients)

export default app
