import { Router } from 'express'
import { resSucess } from '../../red/res.mjs'
import ctrl from './index.mjs'
const router = Router()

router.post('/login', login)

async function login (req, res, next) {
  try {
    const token = await ctrl.login(req.body.user, req.body.password)
    resSucess(req, res, token, 200)
  } catch (err) {
    next(err)
  }
}

export default router
