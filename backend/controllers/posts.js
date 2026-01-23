/* Create imports */
const Post = require("../models/post");
const User = require("../models/user");

/* Create controllers */
exports.getPosts = async (req, res) => {
  try {
    res.status(200).json({ msg: "All posts fetched successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    res.status(200).json({ msg: "Favorite posts fetched successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.postSavePost = async (req, res) => {
  try {
    res.status(200).json({ msg: "Post saved" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.patchPost = async (req, res) => {
  try {
    res.status(200).json({ msg: "Post status changed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    res.status(200).json({ msg: "Post deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
