
const Order = require('../models/ordrar')

exports.getOrders = async (req, res) =>  {

    try {
        const orders = await Order.find({});
        res.status(200).send(orders)
    } catch (error) {
        console.log(error)
    }

}
exports.setOrderSent = async (req, res) => {
    try {

        let id = req.body.id
        let index = req.body.index
        const order = await Order.findOne({_id: id})

        if(order._id == id) {
            order.isSent = !order.isSent
        }

        data = {
            isSent: order.isSent,
            id,
            index
        }

        await order.save() 
        res.send(data).status(200)
    } catch (error) {
        console.log(error)
    }
}