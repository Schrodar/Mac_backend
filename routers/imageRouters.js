const express = require('express');
const {getPictures, postPictures, errorHandler, upload,getSiteImg, deletePicturs, postSiteImgs} = require('../routeHandlers/imageHandler')

const router = express.Router();


router
.route('/') // the slash is  =  '/v1/pictures'
.get(getPictures)
.post(upload.single('img') ,postPictures, errorHandler )


router
.route('/siteimg')
.get(getSiteImg)
.post(upload.single('img'), postSiteImgs, errorHandler)



module.exports = router