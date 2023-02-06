const express = require("express");
const createpost= require("../controllers/createpost");
const authorization = require("../middleware/authorization")
const router = express.Router();
router.post("/post",authorization,createpost);
// router.post("/login", loginuser );
// router.delete("/delete");
module.exports = router;