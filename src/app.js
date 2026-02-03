
const mongoose = require('mongoose')
const express = require('express')
const { config } = require('dotenv')
const bodyParser = require('body-parser')
const bookRoutes = require('./routes/book.routes')

config()

const app = express()


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Servidor iniciado correctamente')
}) 