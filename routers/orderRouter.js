const express = require('express');
const incomingOrder = require('../routeHandlers/orderHandler');
const {getOrders, setOrderSent} = require('../routeHandlers/getOrder');
const {auth} =require('../middelware/auth')

const router = express.Router();



router
.route('/') // the slash is  =  '/v1/order'
.get(auth ,getOrders, )
.post(incomingOrder)

router
.route('/setSend')
.get()
.post(setOrderSent)


module.exports = router