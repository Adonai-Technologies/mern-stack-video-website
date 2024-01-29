const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  title: { type: String, required: true },
  
  description: { type: String, required: true },
  
  videoUrl: { type: String, required: true },
  
  imageUrl: { type: String, required: true },
  
  likes: { type: Array, default: [] },
  
  dislikes: { type: Array, default: [] },
  })
  {timestamps: true}
  
  module.exports = mongoose.model('Video',VideoSchema)