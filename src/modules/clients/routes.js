const express = require('express');
const router = express.Router();

const responses = require('../../red/res.js');

router.get('/', (req, res) => {
    responses.sucess(req, res, 'All ok from clients', 200);
    responses.error(req, res, 'Clients has an error', 500);
});

module.exports = router;