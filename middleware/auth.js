const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

// creat user / sign uP
router.post('/signup', authController.signUp)

// sign in / Log in

router.post('/signin',authController.signIn)

// google authentication

router.post('/signin')


module.exports = router