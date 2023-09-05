'use strict'
const { setPromise, getPromise, REDIS_GET, REDIS_SET } = require('../services/redis.service')

const setPromiseCtrl = async (req, res, next) => {
    try {
        const { key, payload } = req.body
        req.json({
            data: await REDIS_SET(key, JSON.stringify(payload))
        })
    } catch(err) {
        res.status(500).json({
            err: 'err'
        })
    }
}

const getPromiseCtrl = async (req, res, next) => {
    try {
        const { key } = req.query
        req.json({
            data: await REDIS_GET(key)
        })
    } catch(err) {
        res.status(500).json({
            err: 'err'
        })
    }
}


module.exports = {
    setPromiseCtrl,
    getPromiseCtrl
}