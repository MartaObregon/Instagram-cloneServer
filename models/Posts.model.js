const {Schema , model} = require('mongoose')

const postsSchema = new Schema(
  {
    username: {
      type:String,
      
    },
    imageUrl: {
      type:String,
      
    },
    caption: {
      type:String,
      
    },

  },
  {
    timestamps: true,
  }
)



module.exports = model ('posts', postsSchema)