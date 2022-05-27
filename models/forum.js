const mongoose = require('mongoose');


const ForumSchema = mongoose.Schema({
  topic: {
    type: String,  
    required: true
  },
  text:{
      type: String,
      required: true
  },

    comments:{
        type: [
          { text: String,
          date: String
         }],
    },
    tags: {
      type: Array,
    },
    switch: {
      type: Boolean,
      required: [true, "need Boolean to controle Memo"]
    }
},
{
  timestamps: true
});




ForumSchema.methods.toJSON = function () {
  const forumObject = this.toObject();
  // under development 
  return forumObject

}
ForumSchema.statics.findThread = async (id) => {
    const thread = await Forum.findById(id)
  if(!thread){
    throw new Error("No Thread Found")
}


  return thread
} 




  
ForumSchema.pre('save', async function (next){

  next()
})


const Forum = mongoose.model('Forum', ForumSchema);

module.exports = Forum;