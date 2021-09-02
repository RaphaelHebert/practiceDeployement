require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
// const dotenv = require('dotenv')
server.use(express.json())
server.use(cors())


server.get('/', (req, res) => {
    res.status(200).json({message: "this is cool"})
})

server.get('/api', (req, res) => {
    res.status(200).json({ message: "welcome to the api"})
})

// exemple of process.env. 
console.log(process.env.USER)

console.log(process.env.PORT)

const port = process.env.PORT || 5000
server.listen(port, () => {
    console.log(`listening on port ${port}`)
})