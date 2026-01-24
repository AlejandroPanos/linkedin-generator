/* Create imports */
const Post = require("../models/post");
const User = require("../models/user");

/* Create controllers */
exports.getPosts = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ error: "User unauthorised" });
    }

    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: "User unauthorised" });
    }

    const favoritePosts = await Post.find({ userId, isFavorite: true }).sort({ createdAt: -1 });

    res.status(200).json(favoritePosts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.postSavePost = async (req, res) => {
  try {
    const { content, topic, tone, length, context } = req.body;

    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: "User unauthorised" });
    }

    if (!content || !topic || !tone || !length || !context) {
      return res.status(400).json({
        error: "All inputs are required",
      });
    }

    const post = await Post.create({
      userId,
      content,
      topic,
      tone,
      length,
      context,
      isFavorite: false,
    });

    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.patchPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.userId.toString() !== userId) {
      return res.status(403).json({ error: "User unauthorised to modify post" });
    }

    post.isFavorite = !post.isFavorite;
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.userId.toString() !== userId) {
      return res.status(403).json({ error: "User unauthorised to delete post" });
    }

    await post.deleteOne();

    res.status(200).json({ msg: "Post deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
