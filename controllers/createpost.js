const postSchema =  require("../models/postcreate");
const mongoose = require("mongoose");

const createPost = async(req,res) => {
    try{
        const{title,description } = req.body;
                const createPost = new postSchema({
                    title,
                    description,
                    userid : req.id
                });
                let response = await createPost.save();
                res.json({
                    message : "Post created successfully",
                });
        

            
        // });
    }
    catch (err){
        res.json ({
            message:err.message,
        });
    }

};
module.exports = createPost;
