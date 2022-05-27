const express = require('express');
const router = express.Router();
const { serchHandling } = require("../routeHandlers/serchHandler");


router
.route('/') // the slash is  =  '/v1/.....'
.get()
.post(serchHandling)


module.exports = router