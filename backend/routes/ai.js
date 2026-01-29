/* Create imports */
const express = require("express");
const router = express.Router();
const aiControllers = require("../controllers/ai");
const { requireAuth } = require("../middleware/auth");
const { checkUsageLimit } = require("../middleware/subscription");

/* Create routes */
router.post("/generate", requireAuth, checkUsageLimit, aiControllers.postGenerate);

/* Create export */
module.exports = router;
