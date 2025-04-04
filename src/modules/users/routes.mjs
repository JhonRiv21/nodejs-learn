import { Router } from 'express'
import { resSucess } from '../../red/res.mjs'
import ctrl from './index.mjs'
const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.delete('/', deleteItem)
router.post('/', addOrUpdateItem)

async function getAll (req, res, next) {
  try {
    const items = await ctrl.allItems()
    resSucess(req, res, items, 200)
  } catch (err) {
    next(err)
  }
}

async function getById (req, res, next) {
  try {
    const item = await ctrl.getUniqueItem(req.params.id)
    resSucess(req, res, item, 200)
  } catch (err) {
    next(err)
  }
}

async function addOrUpdateItem (req, res, next) {
  let message
  try {
    await ctrl.addId(req.body)
    if (req.body.id === 0) {
      message = 'Item guardado con éxito'
    } else {
      message = 'Item actualizado con éxito'
    }
    resSucess(req, res, message, 201)
  } catch (err) {
    next(err)
  }
}

async function deleteItem (req, res, next) {
  try {
    await ctrl.deleteId(req.body)
    resSucess(req, res, 'Item eliminado correctamente', 200)
  } catch (err) {
    next(err)
  }
}

export default router
