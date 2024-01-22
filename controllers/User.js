const Error = require('../middleware/error.js')
const User = require('../models/User.js')


module.exports = {
    update: async (req,res,next)=>{
       if(req.params.id === req.user.id){
        try {
           const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:res.body
            })
            console.log(res.status(200).json(updateUser))
            
            } catch(err){}
        }else{
            return next(Error.createError(406,"You can update only Your account"))
        }
        
    },


    deleteUser: (req,res,next)=>{
       
    },

    getUser: (req,res,next)=>{
       
    },


    subscribe: (req,res,next)=>{
        
    },

    unsubscribe: (req,res,next)=>{
        
    },


    like: (req,res,next)=>{
        
    },

    
    dislike: (req,res,next)=>{
        
    }


}















