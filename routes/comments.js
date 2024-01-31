const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.js') 
const commentController = require('../controllers/comment.js')
const authenticater = require('../middleware/verifyToken.js').verifyToken



router.post('/',commentController.addComment, authenticater)
router.delete('/:id',commentController.deleteComment, authenticater)
router.get('/:videoId',commentController.getComment)



module.exports = router