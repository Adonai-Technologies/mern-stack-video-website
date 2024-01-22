const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.js') 
const userController = require('../controllers/User.js')
const verifyToken = require('../middleware/verifyToken.js').verifyToken

// Update User
router.put('/:id',verifyToken,userController.update)


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