const express = require('express')
const router = express.Router()
const commentController = require('../controllers/Comment')


router.get('/', commentController.getIndex)

module.exports = router