const express = require('express')
const router = express.Router()
const videoController = require('../controllers/Video')


router.get('/', videoController.getIndex)

module.exports = router