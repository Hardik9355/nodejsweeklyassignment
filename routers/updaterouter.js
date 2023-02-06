const express = require("express");
const update = require ("../controllers/updatecontrollers");
const authorization = require("../middleware/authorization");
const router = express.Router();
router.put("/updateuser",authorization, update);
module.exports = router;
