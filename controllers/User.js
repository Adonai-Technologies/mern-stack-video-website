const Error = require("../middleware/error.js").createError;
const User = require("../models/User.js");

module.exports = {
  update: async (req, res, next) => {
    if (req.params._id === req.user) {
      try {
        const updateUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body
          },
          { new: true }
        );
        res.status(200).json(updateUser);
      } catch (err) {
        return next(Error(406, "You can update only Your account"));
      }
    }
  },

  
deleteUser: async (req, res, next) => {
    if (req.params._id === req.user) {
      try {
        await User.findByIdAndDelete(
          req.user._id
          );
          
          res.status(200).json("User Has been deleted")
          } catch (err) {
        return next(Error(406, "You can delete only Your account"));
      }
    }
  },

  getUser: async (req, res, next) => {
     try {
      
     } catch (error) {
      next()
     }
  },

  subscribe: async (req, res, next) => {
    try {
      
    } catch (error) {
     next()
    }
  },

  unsubscribe:async (req, res, next) => {
    try {
      
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
