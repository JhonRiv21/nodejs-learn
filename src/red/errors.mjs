import { resError } from './res.mjs'

export const redError = (err, req, res, next) => {
  console.error('Error', err)

  const message = err.message || 'Internal error'
  const status = err.statusCode || 500

  resError(req, res, message, status)
}
