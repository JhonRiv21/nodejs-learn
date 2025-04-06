import jwt from 'jsonwebtoken'
import { jwt as config } from '../config.mjs'
import { mwError } from '../middlewares/errors.mjs'

const secret = config.secret

export const assignToken = (data) => {
  return jwt.sign(data, secret)
}

export const checkToken = {
  confirmToken: function (req) {
    return decodedHeader(req)
  }
}

const verifyToken = (token) => {
  return jwt.verify(token, secret)
}

const getToken = (authorization) => {
  if (!authorization) {
    throw mwError('No viene token', 401)
  }

  if (!authorization.toLowerCase().startsWith('bearer ')) {
    throw mwError('Formato inválido', 401)
  }

  return authorization.slice(7).trim()
}

const decodedHeader = (req) => {
  const authorization = req.headers.authorization || ''
  const token = getToken(authorization)
  const decoded = verifyToken(token)

  req.user = decoded
  return decoded
}
