const Error = require("../middleware/error.js").createError;
const User = require("../models/User.js");

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
         $push:{subcribedUsers:req.params._id},
         
        })
         await User.findByIdAndUpdate(req.params._id,{
             $inc:{subcribers: 1}
         })
         res.status(200).json('Subcribtion successfull')
        } catch (error) {
     next()
    }
  },

  unsubscribe:async (req, res, next) => {
    try {
      await User.findByIdAndUpdate(req.user,{
        $pull:{subcribedUsers:req.params._id},
        
       })
        await User.findByIdAndUpdate(req.params._id,{
            $inc:{subcribers: -1}
        })
        res.status(200).json('UnSubcribtion successfull')
    
    } catch (error) {
     next()
    }
  },

 
  like: async(req, res, next) => {
    try {
      
    } catch (error) {
     next()
    }
  },

  
  
  dislike:async (req, res, next) => {
    try {
      
    } catch (error) {
     next()
    }
  }
};
