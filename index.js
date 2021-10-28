const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT||3000
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const DB_URL = 'mongodb+srv://user:user@cluster0.1m428.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API',
      description: 'Track Your Progress API',
      servers: ['http://localhost:5000'],
      version: '1.0.1',
    },
  },
  apis: ['./routes/*.js'],
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(PORT,() => console.log('RERVER STARTED'))