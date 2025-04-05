import { Router } from 'express'
import { resSucess } from '../../red/res.mjs'
import ctrl from './index.mjs'
const router = Router()

router.get('/:id', getById)

async function getById (req, res, next) {
  try {
    const item = await ctrl.getUniqueItem(req.params.id)
    resSucess(req, res, item, 200)
  } catch (err) {
    next(err)
  }
}

export default router
