import { Router } from 'express'
import { sucess, error } from '../../red/res.mjs'
import { allItems, getUniqueItem } from './controller.mjs'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const items = await allItems()
    sucess(req, res, items, 200)
  } catch (e) {
    error(req, res, e, 500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const item = await getUniqueItem(req.params.id)
    sucess(req, res, item, 200)
  } catch (e) {
    error(req, res, e, 500)
  }
})

export default router
