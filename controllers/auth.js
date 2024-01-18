const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')



exports.signUp = async (request,response,next) => {
 try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(request.body.password, salt);
    const newUser = new User({...request.body, password: hash })
    await newUser.save();
    response.status(200).send('New user has been created')
 }
 catch(err){
    next(createError(404 || 'not found sorry'))
 }
};

exports.signIn = async (request,response,next) => {
    try{
       const user = await User.findOne({name:request.body.name})
      if(!user){
             
      }
       const isCorrect = bcrypt.compare(request.body.password,user.password)
       }
    catch(err){
       next(err)
    }
   };