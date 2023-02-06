const userSchema =  require("../models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
saltRounds =10;
const createUser = async(req,res) => {
    try{
        const{fullname ,email,password } = req.body;
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            if(!err){
                const createUser = new userSchema({
                    fullname,
                    email,
                    password:hash
                });
                let response = await createUser.save();
                res.json({
                    message : "Users Details Saved Successfully",
                });
            }
            else{
                 res.json({
                     message: err.message,
                    });
                }
            });

            
        // });
    }
    catch (err){
        res.json ({
            message:err.message,
        });
    }

};
module.exports = createUser;
