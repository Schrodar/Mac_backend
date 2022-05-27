
const mongoose = require('mongoose');

const BildSchema = mongoose.Schema({
  

  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
    },
  modify: {
    type: Boolean,
    required: true 
  },
  amount: {
    type: Number,
    required: true
  },
  cartActive: {
    type: Boolean,
    required: true
},
  category: {
    type: String
  },
  bild: {
    type: Buffer,
  },
  content: {
    type: Number,
    required: true
  }
});



BildSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  // under development 
  return userObject

}
BildSchema.statics.findPicutre = async (id) => {
    const bild = await Bild.findById(id)

  if(!bild){
    throw new Error("no pictrure Found")
}


  return bild
} 




  
BildSchema.pre('save', async function (next){

  next()
})


const Bild = mongoose.model('Bild', BildSchema);

module.exports = Bild;
