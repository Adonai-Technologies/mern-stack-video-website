const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.js') 
const videoController = require('../controllers/Video.js')
const authenticateUser = require('../middleware/verifyToken.js').verifyToken



// create a video

router.post('/',videoController.addVideo,authenticateUser)

router.put('/:id',videoController.updateVideo,authenticateUser)

router.delete('/:id',videoController.deleteVideo,authenticateUser)

router.get('/find/:id',videoController.getVideo)

router.put('/view/:id',videoController.addView)

router.get('/trend',videoController.trend)

router.get('/random',videoController.random)

router.get('/sub',videoController.sub,authenticateUser)

router.get('/tags',videoController.getBytag)

router.get('/search',videoController.search)



module.exports = router