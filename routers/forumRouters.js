const express = require('express');
const router = express.Router();
const { getForum, postForum, postComments, upload, forumImg} = require("../routeHandlers/handelForum");
const { errorHandler } = require('../routeHandlers/imageHandler');


router
.route('/') // the slash is  =  '/v1/....'
.get(getForum,)
.post(upload.single('img'), postForum, errorHandler)

router
.route('/comments')
.post(postComments)


router
.route("/img")
.get()
.post(forumImg)


module.exports = router