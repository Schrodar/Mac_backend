const express = require('express');
const router = express.Router();
const { logginHandling, newUser } = require("../routeHandlers/logginHandling");


router
.route('/') // the slash is  =  '/v1/.....'
.get()
.post(logginHandling,)

router
.route('/newUser')
.get()
.post(newUser,)

module.exports = router