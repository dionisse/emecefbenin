const express = require('express')
const cors = require('cors')
const server = express()
const port = 7001
const facturationRoute = require('./routes/facturationRoutes')
const informationRoutes = require('./routes/informationRoutes')

server.use(express.json())
server.use(cors({
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    origin: '*'
}))

server.use(facturationRoute)
server.use(informationRoutes)


server.listen(port, () => {
    console.log(`Server starting at http://localhost:${port}`);
})