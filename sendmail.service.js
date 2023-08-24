const express = require('express')
const app = express()
const { createClient  } = require('redis')
const client = createClient()
const PORT = 3002

client.on('error', err => console.log('Redis Client Error', err));

client.connect().then(() => {
    // Subscribe channel
    client.subscribe('ordersystem', (message) => {
        console.log(`The message for send mail is :`, JSON.parse(message))
    })
})

app.listen(PORT, () => {
    console.log(`The send mail service run on ${ PORT }`)
})