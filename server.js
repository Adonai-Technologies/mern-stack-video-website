const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const userRoutes = require('./routes/users')
const videoRoutes = require('./routes/videos')
const commentRoutes = require('./routes/comments')
const authRoutes = require('./middleware/auth')
const cookie_parser = require('cookie-parser')


require('dotenv').config({path: './config/.env'})

connectDB()


app.set('view engine', '')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use( cookie_parser)
app.use(express.json())


app.use('/auth', authRoutes, )
app.use('/', userRoutes)
app.use('/videos', videoRoutes)
app.use('/comments', commentRoutes)




app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better go catch it!')
})  