const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.js') 
const userController = require('../controllers/User.js')


router.get('/', userController.getIndex)
// router.get('/login', authController.getLogin)
// router.post('/login', authController.postLogin)
// router.get('/logout', authController.logout)
// router.get('/signup', authController.getSignup)
// router.post('/signup', authController.postSignup)

module.exports = router