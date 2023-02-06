const postSchema = require("../models/postcreate");
const mongoose = require("mongoose");
const getpost = async (req, res) => {
    try {
      let getpost = await postSchema.find({userid:req.id});
      res.json({
        message: "Post Get",
        getpost
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };
module.exports =  getpost