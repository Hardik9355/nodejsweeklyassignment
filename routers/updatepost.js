const express = require("express");
const postupdate = require ("../controllers/updatepost");
const authorization = require("../middleware/authorization");
const router = express.Router();
router.put("/update",authorization,postupdate);
module.exports = router;
