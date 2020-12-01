const express = require('express')
const router = express.Router()
const PostsModel = require ('../models/Posts.model')


router.get('/getposts', (req, res)=>{
  PostsModel.find()
  .then((posts)=>{
    
    res.status(200).json(posts)
    console.log(posts)
  })
  .catch((err)=>{
    res.status(500).json({
      error: 'not created',
      message: err
    })
  })
})

module.exports = router;