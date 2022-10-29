const express = require('express');
const { getProduct ,getPictures, postPictures, errorHandler, upload,getSiteImg, deletePicturs, postSiteImgs } = require('../routeHandlers/imageHandler')
const {auth} =require('../middelware/auth')

const router = express.Router();


router
.route('/') // the slash is  =  '/v1/pictures'
.get(getPictures)
.post(upload.single('img') ,postPictures, errorHandler )
.delete(auth, deletePicturs)


router
.route('/siteimg')
.get(getSiteImg)
.post(upload.single('img'), postSiteImgs, errorHandler)


router
.route('/produkt')
.put(auth ,getProduct)


module.exports = router