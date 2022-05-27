
const mongoose = require('mongoose');


const OrderSchema = mongoose.Schema({
  

  name: {
    type: String,
    required: [true, "needed Name for shipping"]
  },
  address: {
      type: String,
    required: [true, "needed address for shiping"]
  },
  city:{
      type: String,
      required: [true, "need for addresing correctly"]

  },
  phone:{
      type: String,
      required: [true, "need Number to send delivering message"]
      },
  postnumber: {
      type: String,
      required: [true, "Need postnumber to send goods"]
  },
  email: {
      type: String,
      required: [true, "Need to give an email"]
  },
  bilder: [Array],
  isSent: {
    type: Boolean,
    required: [true, "Needs status on delivering"]
  }
},
{
  timestamps: true
});



OrderSchema.methods.toJSON = function () {
  const orderObject = this.toObject();
  return orderObject

}
  
OrderSchema.pre('save', async function (next){

  next()
})


const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
