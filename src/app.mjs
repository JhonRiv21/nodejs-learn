import { app as _app } from './config.mjs'
import clients from './modules/clients/routes.mjs'
import users from './modules/users/routes.mjs'
import auth from './modules/auth/routes.mjs'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { redError } from './red/errors.mjs'

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.set('port', _app.port)
app.use('/api/clients', clients)
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use(redError)

export default app
