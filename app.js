require('express-async-errors')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const ticketsRouter = require('./controllers/tickets')

mongoose.set('strictQuery', false)

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)

    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch(error => {
        logger.info('error connecting to MongoDB:', error.message)
    })

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/tickets', ticketsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app