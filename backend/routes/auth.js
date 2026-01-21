/* Create imports */
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth");

/* Create routes */
router.get("/profile", authControllers.getLoggedUser);
router.post("/register", authControllers.postRegister);
router.post("/login", authControllers.postLogin);
router.post("/logout", authControllers.postLogout);

/* Create export */
module.exports = router;
