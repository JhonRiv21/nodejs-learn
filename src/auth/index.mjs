import jwt from 'jsonwebtoken'
import { jwt as config } from '../config.mjs'

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
    throw new Error('No viene token')
  }

  if (!authorization.toLowerCase().startsWith('bearer ')) {
    throw new Error('Formato inválido')
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
