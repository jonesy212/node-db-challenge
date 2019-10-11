//index is the main central area of the app

const express = require('express')
const routes = require('./api/server')
const helmet = require('helmet')
const server = express()


server.use(helmet())
server.use(express.json())
server.use('/api', routes)


const port = 5000
server.listen(port, () =>{
    console.log(`\nlistening to server port ${port}`)
})