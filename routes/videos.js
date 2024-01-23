const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.js') 
const videoController = require('../controllers/video.js')



// create a video

router.post('/',videoController.addVideo)



router.put('/:id',videoController. updateVideo)



router.delete('/:id',videoController.deleteVideo)



router.get('/find/:id',videoController.getVideo)



router.post('/',videoController.likeVideo)



router.post('/',videoController.dislikeVideo)




module.exports = router