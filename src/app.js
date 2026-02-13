
const mongoose = require('mongoose')
const express = require('express')
const { config } = require('dotenv')
const bodyParser = require('body-parser')
const bookRoutes = require('./routes/book.routes')

config()


// Usamos express para los middlewares
const app = express()
app.use(bodyParser.json()) // este es parseador de Bodies

// Aca conectarmeros la base de datos:
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_URL})
const db = mongoose.connection

app.use('/books', bookRoutes)


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Servidor iniciado correctamente')
}) 