const jwt = require('jsonwebtoken')
const Error = require('../middleware/error.js').createError

module.exports = {
    verifyToken: (req,res,next)=>{
       const token = req.cookies.access_token
       if(!token) return next(Error(401,"it is not authenticated"))

       jwt.verify(token,process.env.jwt, (err,user) =>{
          if(err) return next(Error(403,"token is not valid"));
          req.user = user
          next(err) 
          
          
       })
    },


//     // Assuming you have some middleware for authentication
// authenticateUser: (req, res, next) => {
//    // Implement your authentication logic here
//    // For example, you might check for a token in the request headers and decode it to get user information
//    const token = req.headers.authorization;
 
//    if (!token) {
//      return res.status(401).json({ error: 'Unauthorized - Token not provided' });
//    }
 
//    // Here, you might decode the token and extract user information
//    const decodedUser = decodeToken(token);
 
//    // Set the user information on the request object
//    req.user = decodedUser;
 
//    // Continue to the next middleware or the route handler
//    next();
//  },
 
}


