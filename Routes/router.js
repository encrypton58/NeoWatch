const { Router } = require('express')
const router = Router()
const indexController = require('../controllers/index')
const seeFiles = require('../controllers/seeFilesDirController')


router.get('/', indexController)

router.get('/watch', seeFiles.getFile)

router.get('/see', seeFiles.seeFilesOfDir)


module.exports = router