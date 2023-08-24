const express = require('express')
const app = express()
const { createClient } = require('redis')
const client = createClient()
const PORT = 3000

client.on('error', err => console.log('Redis Client Error', err));

client.connect();

app.get('/order', (req, res, next) => {
    const orders = [
        { productId: 1, price: 5000 },
        { productId: 2, price: 10000 }
    ]

    // Step Service: send order of customer to Payment Service and SendMail Service
    client.publish('ordersystem', JSON.stringify(orders))

    res.json({
        status: 200,
        message: 'Got it!'
    })
})

app.listen(PORT, () => {
    console.log(`The order service run on ${ PORT }`)
})