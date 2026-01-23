/* Create imports */
const express = require("express");
const router = express.Router();
const postsContollers = require("../controllers/posts");
const { requireAuth } = require("../middleware/auth");

/* Create routes */
router.get("/", requireAuth, postsContollers.getPosts);
router.get("/favorites", requireAuth, postsContollers.getFavorites);
router.post("/", requireAuth, postsContollers.postSavePost);
router.patch("/:id/favorite", requireAuth, postsContollers.patchPost);
router.delete("/:id", requireAuth, postsContollers.deletePost);

/* Create export */
module.exports = router;
