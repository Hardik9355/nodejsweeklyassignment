const express = require("express");
const getpost = require ("../controllers/getpost");
const authorization = require("../middleware/authorization")
const router = express.Router();
router.get("/get",authorization,getpost);
module.exports = router;
