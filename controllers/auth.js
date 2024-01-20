const { default: mongoose } = require("mongoose");
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const Error = require('../middleware/error.js')
const jwt = require('jsonwebtoken')

exports.signUp = async (req,res,next) =>{

    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body,password:hash})
        await newUser.save() 
        res.status(200).send('User has been created')
    }catch(err){
    next(err)
 }
}

 
exports.signIn = async (req,res,next) =>{

    try{
        const user = await User.findOne({name:req.body.name})
        if(!user){return next(Error.createError(704, 'User not found'))
            
        
        }
        
        const token = jwt.sign({id:user._id},process.env.jwt)
        const {password, ...others} = user._doc;
        res.cookie('access_token', token,{
           httpOnly:true
        }).status(200)
          .json(others)
    }catch(err){
    next(err)
 }
}