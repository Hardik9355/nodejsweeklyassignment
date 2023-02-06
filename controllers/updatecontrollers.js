const userSchema = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
// const { use } = require("../routers/updaterouter");
const updateUser = async (req, res) => {
    try {
      const {fullname, email} = req.body;
      let user = await userSchema.findOne({_id: req.id});
      user.email = email ? email : user.email;
      user.fullname = fullname ? fullname : user.fullname;
      user.save();
      res.json({
        message: "User updated",
        user,
      });
    } catch (err) {
        
      res.json({
        message: err.message,
      });
    }
  };
module.exports = updateUser;