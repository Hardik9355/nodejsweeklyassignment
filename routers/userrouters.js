const express = require("express");
const user= require("../controllers/usercontrollers");
// const loginuser = require("../controllers/logincontrollers");
const router = express.Router();
router.post("/create",user);
// router.post("/login", loginuser );
// router.delete("/delete");
module.exports = router;