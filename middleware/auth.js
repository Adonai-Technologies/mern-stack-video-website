const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.js') 


// create user || signUp
router.post('/signup',  authController.signUp)
// signIn

router.post('/signIn',authController.signIn)
// Google authentication

router.post('/google', )


module.exports = router