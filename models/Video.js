const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  
  userId: { type: String, required:true },
  
  title: { type: String, required: true },
  
  description: { type: String, required: true },
  
  videoUrl: { type: String, required: true },
  
  imageUrl: { type: String, required: true },
  
  likes: { type: Array, default: [] },
  
  dislikes: { type: Array, default: [] },

  views:{type:Number, default:0},
  })
  {timestamps: true}
  
  module.exports = mongoose.model('Video',VideoSchema)