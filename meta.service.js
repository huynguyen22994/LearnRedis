const express = require('express')
const app = express()
const { createClient  } = require('redis')
const client = createClient()
const PORT = 3003

client.on('error', err => console.log('Redis Client Error', err));

client.connect().then(() => {
    // PSubscribe channel o*
    client.pSubscribe('o*', (message) => {
        console.log(`The message for Meta Service is :`, JSON.parse(message))
    })
})

app.listen(PORT, () => {
    console.log(`The send Meta service run on ${ PORT }`)
})