import { checkToken } from '../../auth/index.mjs'

export default function checkSecure () {
  return function middleware (req, res, next) {
    try {
      checkToken.confirmToken(req)
      next()
    } catch (e) {
      res.status(401).send({
        error: true,
        status: 401,
        body: `Token inválido o ausente, ${e}`
      })
    }
  }
}
