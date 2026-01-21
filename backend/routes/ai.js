/* Create imports */
const express = require("express");
const router = express.Router();
const aiControllers = require("../controllers/ai");

/* Create routes */
router.post("/generate", aiControllers.postGenerate);

/* Create export */
module.exports = router;
