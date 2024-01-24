const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.js') 
const videoController = require('../controllers/Video.js')



// create a video

router.post('/',videoController.addVideo)

router.put('/:id',videoController. updateVideo)

router.delete('/:id',videoController.deleteVideo)

router.get('/find/:id',videoController.getVideo)

router.put('/view/:id',videoController.addView)

router.get('/trend',videoController. trend)

router.get('/random',videoController.random)

router.put('/sub',videoController.sub)



module.exports = router