/* Librerias */
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const categoryRoute = require('./routes/category.route')
const gameRoute = require('./routes/games.route')
const authRoute = require('./routes/auth')
/* Metodos */
const app = express()
require('dotenv').config()

/* Server Middlewares*/
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cors())

/* DataBase */
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify:true
}).then(()=> {
    console.log("Conectado a la DB")
})

/* Port */
const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Servidor conectado al puerto ${port}`)
})

/* Routes */
app.use('/api/category', categoryRoute)
app.use('/api/videogame', gameRoute)
app.use('/api/auth', authRoute)