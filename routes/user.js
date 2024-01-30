const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const userController = require('../controllers/User.js')
const authenticateUser = require('../middleware/verifyToken.js').verifyToken

// Update User

router.put('/:id',userController.update, authenticateUser)


// Delete User
router.delete('/:id',userController.deleteUser, authenticateUser)


// get a User
router.get('/find/:id',userController.getUser)

// subcribe a User
router.put('/sub/:id',userController.subscribe, authenticateUser)

// unsubscribe a User
router.put('/unsub/:id',userController.unsubscribe, authenticateUser)

// like a video
router.put('/like/:videoId',userController.like, authenticateUser)

// dislike a video

router.put('/dislike/:videoId',userController.dislike, authenticateUser)




module.exports = router