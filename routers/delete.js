const express = require("express");
const deletepost = require ("../controllers/deletepost");
const authorization = require("../middleware/authorization")
const router = express.Router();
router.delete("/delete",authorization,deletepost);
module.exports = router;
