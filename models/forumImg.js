const mongoose = require('mongoose');


const ForumImgSchema = mongoose.Schema({
    bild: {
        type: Buffer,
        required: [true, "No img found"]
    },
    ar: {
      type: Number,
      required:[true,  "Need to set aspect ratio"]
    },
    thread: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  });

ForumImgSchema.methods.toJSON = function () {
  const forumObject = this.toObject();
  // under development 
  return forumObject

}

ForumImgSchema.statics.findThreadImg = async (id) => {

    const thread = await ForumImg.find({thread: id})
  if(!thread){
    throw new Error("No Thread Found")
}

  return thread
} 
  
ForumImgSchema.pre('save', async function (next){

  next()
})

const ForumImg = mongoose.model('ForumImg', ForumImgSchema);

module.exports = ForumImg;