
const mongoose = require('mongoose');

const SitePictures = mongoose.Schema({
  
  bild: {
    type: Buffer,
  }
});



SitePictures.methods.toJSON = function () {
  const userObject = this.toObject();
  // under development 
  return userObject

}
SitePictures.statics.findPicutre = async (id) => {
    const bild = await Bild.findById(id)

  if(!bild){
    throw new Error("no pictrure Found")
}


  return bild
} 




  
SitePictures.pre('save', async function (next){

  next()
})


const SiteImg = mongoose.model('SiteImg', SitePictures);

module.exports = SiteImg;
