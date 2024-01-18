const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const connectDB = require('./config/database')
const userRoutes = require('./routes/users')
const videoRoutes = require('./routes/videos')
const commentRoutes = require('./routes/comments')
const authRoutes = require('./middleware/auth')
const figlet = require('figlet')





require('dotenv').config({path: './config/.env'})

connectDB()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/auth', authRoutes, )
app.use('/', userRoutes)
app.use('/videos', videoRoutes)
app.use('/comments', commentRoutes)


app.use((err,request,response,next) => {
    const status = err.status || 500;
    const message = err.status || 'Something went wrong';
    return response.status(status).json({
        success:false,
        status,
        message,
    })
})


app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better go catch it!')
})  