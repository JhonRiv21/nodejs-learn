const express = require('express');
const router = express.Router();

const responses = require('../../red/res.js');
const controller = require('./controller.js')

router.get('/', (req, res) => {
    const todos = controller.allItems()
    .then((items) => {
        responses.sucess(req, res, items, 200)
    })
});

module.exports = router;