const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const userRoutes = require('./routes/users.js')
const commentRoutes = require('./routes/comments.js')
const videoRoutes = require('./routes/videos.js')
const authRoutes = require('./middleware/auth.js')
const cookie_parser = require('cookie-parser')



require('dotenv').config({path: './config/.env'})
connectDB()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cookie_parser())
app.use(express.json())


app.use('/auth',authRoutes)
app.use('/user', userRoutes )
app.use('/comment', commentRoutes )
app.use('/video', videoRoutes )


app.use((err,req,res,next) =>{
      const status = err.status || 500;
      const message = err.massage || "Somthing Went Wrong";
      return res.status(status).json({
        success:false,
        status,
        message,
      })
})



app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better go catch it!')
})  