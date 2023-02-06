const postSchema = require("../models/postcreate");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
// const { use } = require("../routers/updaterouter");
const deletepost = async (req, res) => {
    try {
    
    await postSchema.deleteOne({_id: req.body.id});
      
      
      res.json({
        message: "Post Deleted",

      });
    } catch (err) {
        
      res.json({
        message: err.message,
      });
    }
  };
module.exports = deletepost;