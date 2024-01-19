const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const userRoutes = require('./routes/users.js')



require('dotenv').config({path: './config/.env'})
connectDB()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/user', userRoutes )


app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better go catch it!')
})  