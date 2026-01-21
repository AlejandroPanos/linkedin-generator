/* Create imports */
const express = require("express");
const router = express.Router();
const postsContollers = require("../controllers/posts");

/* Create routes */
router.get("/", postsContollers.getPosts);
router.get("/favorites", postsContollers.getFavorites);
router.post("/", postsContollers.postSavePost);
router.patch("/:id/favorite", postsContollers.patchPost);
router.delete("/:id", postsContollers.deletePost);

/* Create export */
module.exports = router;
