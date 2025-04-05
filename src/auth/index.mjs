import jwt from 'jsonwebtoken'
import { jwt as config } from '../config.mjs'

const secret = config.secret

export const assignToken = (data) => {
  return jwt.sign(data, secret)
}
