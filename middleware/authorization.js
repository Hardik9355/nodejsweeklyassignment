require("dotenv").config();
const jwt = require("jsonwebtoken");
const authorization = async (req, res, next) => {
  let token = req.header("authorization");
  if (token) {
    let onlyToken = token.replace("Bearer ", "");

    jwt.verify(onlyToken, process.env.SECRETKEY, function (err, decoded) {
      if (!err) {
        req.id = decoded?.id;
        next();
      } else {
        res.json({
          message: "Unauthorised request",
        });
      }
    });
  }
};
module.exports = authorization;