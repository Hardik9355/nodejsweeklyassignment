const postSchema = require("../models/postcreate");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
// const { use } = require("../routers/updaterouter");
const updatepost = async (req, res) => {
    try {
      const {title,description} = req.body;
      let post = await postSchema.findOne({_id: req.body.id});
      post.title = title ? title : post.title;
      post.description = description ? description : post.description;
      post.save();
      res.json({
        message: "Post updated",
        post,
      });
    } catch (err) {
        
      res.json({
        message: err.message,
      });
    }
  };
module.exports = updatepost;