const express = require("express")

const carsRouters = require('./cars/cars-router')

const server = express()

server.use(express.json())

server.use('/api/cars', carsRouters)

module.exports = server
