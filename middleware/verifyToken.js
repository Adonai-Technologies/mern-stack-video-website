const jwt = require('jsonwebtoken')
const Error = require('../middleware/error.js')

module.exports = {
    verifyToken: (req,res,next)=>{
       const token = req.cookies.access_token
       if(!token) return next(Error.createError(401,"it is not authenticated"))

       jwt.verify(token,process.env.jwt, (err,user) =>{
          if(err) return next(Error.createError(403,"token is not valid"));
          req.user = user
          next(err) 
          
          
       })
    },
}