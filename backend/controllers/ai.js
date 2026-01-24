/* Create imports */
const Post = require("../models/post");

/* Create controllers */
exports.postGenerate = async (req, res) => {
  try {
    const { topic, tone, length, context } = req.body;

    const post = await Post.createPost(topic, tone, length, context);

    res.status(200).json({
      content: post,
      parameters: { topic, tone, length, context },
    });
  } catch (error) {
    console.error(error.message);
    const status = error.message === "All fields are required" ? 400 : 500;
    res.status(status).json({ error: error.message });
  }
};
