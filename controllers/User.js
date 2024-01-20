const Error = require('../middleware/error.js')
const User = require('../models/User.js')


module.exports = {
    update: async (req,res,next)=>{
       if(req.params.id === req.user.id){
        try {
           const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:res.body
            })
            res.status(200).json(updateUser)

            } catch(err){
                
            }
        }else{
            return next(Error.createError(406,"You can update only Your account"))
        }
    },


    deleteUser: (req,res,next)=>{
       console.log('its working')
    },

    getUser: (req,res,next)=>{
        console.log('its working')
    },


    subscribe: (req,res,next)=>{
        console.log('its working')
    },

    unsubscribe: (req,res,next)=>{
        console.log('its working')
    },


    like: (req,res,next)=>{
        console.log('its working')
    },

    dislike: (req,res,next)=>{
        console.log('its working')
    }


}















