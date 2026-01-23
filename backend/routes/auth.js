/* Create imports */
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth");
const { requireAuth } = require("../middleware/auth");

/* Create routes */
router.get("/profile", requireAuth, authControllers.getLoggedUser);
router.post("/register", authControllers.postRegister);
router.post("/login", authControllers.postLogin);
router.post("/logout", requireAuth, authControllers.postLogout);

/* Create export */
module.exports = router;
