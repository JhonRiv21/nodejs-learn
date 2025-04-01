const express = require('express')
const router = express.Router()

const responses = require('../../red/res.js')
const controller = require('./controller.js')

router.get('/', async (req, res) => {
  const items = await controller.allItems()
  responses.sucess(req, res, items, 200)
})

module.exports = router
