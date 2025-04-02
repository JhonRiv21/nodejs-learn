import { Router } from 'express'
import { sucess, error } from '../../red/res.mjs'
import { allItems, getUniqueItem, deleteId } from './controller.mjs'
const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.put('/', deleteItem)

async function getAll (req, res) {
  try {
    const items = await allItems()
    sucess(req, res, items, 200)
  } catch (err) {
    error(req, res, err, 500)
  }
}

async function getById (req, res) {
  try {
    const item = await getUniqueItem(req.params.id)
    sucess(req, res, item, 200)
  } catch (err) {
    error(req, res, err, 500)
  }
}

async function deleteItem (req, res) {
  try {
    await deleteId(req.body)
    sucess(req, res, 'Item eliminado correctamente', 200)
  } catch (err) {
    error(req, res, err, 500)
  }
}

export default router
