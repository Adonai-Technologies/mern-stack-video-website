const Error = require("../middleware/error.js").createError;
const User = require("../models/User.js");
const Video = require("../models/Video.js");

module.exports = {
  update: async (req, res, next) => {
    if (req.params._id === req.user) {
      try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body},{ new: true }
           
        );
        res.status(200).json(updateUser);
      } catch (err) {
        return next(Error(404, "You can update only Your account"));
      }
    }
  },

  
deleteUser: async (req, res, next) => {
    if (req.params_id === req.user) {
      try {
       const deleteUser = await User.findByIdAndDelete(req.params.id);
          
          res.status(200).json("User Has been deleted")
          } catch (err) {
        return next(Error(405,"You can delete only Your account"));
      }
    }
  },

  getUser: async (req, res, next) => {
     try {
      const user = await User.findById(req.params._id)
      res.status(200).json(user)
     } catch (error) {
      next()
     }
  },

  subscribe: async (req, res, next) => {
    try {
     
      await User.findByIdAndUpdate(req.user,{
         $push:{subscribedUsers: req.params.id},
         })
         
         await User.findByIdAndUpdate(req.params.id,{
             $inc:{subscribers: 1}
         })
         res.status(200).json('Subscribtion successfull')
        } catch (error) {
     next()
    }
  },

  unsubscribe:async (req, res, next) => {
    try {
      await User.findByIdAndUpdate(req.user,{
        $pull:{subscribedUsers:req.params._id},
        
       })
        await User.findByIdAndUpdate(req.params._id,{
            $inc:{subscribers: -1}
        })
        res.status(200).json('Unsubscribtion successfull')
    
    } catch (error) {
     next()
    }
  },

 
  like: async(req, res, next) => {
    const id = req.user
    const videoIdid = req.user
    try {
      await Video.findByIdAndUpdate(videoId,{
        $addToSet:{likes:id},
        $pull:{dislikes:id}
      })
      res.status(200).json('The video has been liked')
    } catch (error) {
     next()
    }
  },

  
  
  dislike:async (req, res, next) => {
    const id = req.user
    const videoId = req.params
    try {
      await Video.findByIdAndUpdate(videoId,{
        $addToSet:{dislikeslikes:id},
        $pull:{likes:id}
      })
      res.status(200).json('The video has been liked')
    } catch (error) {
     next()
    }
},
}