'use strict'

const client = require('../databases/init.redis')
const { promisify } = require("util")

// Cách chuyển từ callback function sang promise - basic lv0
const setPromise = async (key, value) => {
    try {
        return new Promise((resolve, reject) => {
            client.set(key, value, (err, result) => {
                return !err ? resolve(result) : reject(err)
            })
        })
    } catch(err) {
        reject(err)
    }
}
const getPromise = async (key) => {
    try {
        return new Promise((resolve, reject) => {
            client.get(key, (err, result) => {
                return !err ? resolve(result) : reject(err)
            })
        })
    } catch(err) {
        reject(err)
    }
}

// promisify dùng để chuyển callback => Promise
const REDIS_GET = promisify(client.get).bind(client);
const REDIS_SET = promisify(client.set).bind(client);

module.exports = {
    setPromise,
    getPromise,
    REDIS_GET,
    REDIS_SET
}