const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const userController = require('../controllers/User.js')


// Update User

router.put('/:id',userController.update)


// Delete User
router.delete('/:id',userController.deleteUser)


// get a User
router.get('/find/:id',userController.getUser)

// subcribe a User
router.put('/sub/:id',userController.subscribe)

// unsubscribe a User
router.put('/unsub/:id',userController.unsubscribe)

// like a video
router.put('/like/:videoId',userController.like)

// dislike a video

router.put('/dislike/:videoId',userController.dislike)




module.exports = router