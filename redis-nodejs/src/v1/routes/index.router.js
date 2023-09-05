const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

const { setPromiseCtrl, getPromiseCtrl } = require('../controllers/redis.controller')
router.put('/v1/user', setPromiseCtrl)
router.get('/v1/user', getPromiseCtrl)

module.exports = router;