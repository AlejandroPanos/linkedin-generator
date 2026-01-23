/* Create imports */
const Post = require("../models/post");

/* Create controllers */
exports.postGenerate = async (req, res) => {
  try {
    const { topic, tone, length, context } = req.body;

    const post = await Post.createPost(topic, tone, length, context);

    res.status(200).json({
      success: true,
      content: post,
      parameters: { topic, tone, length, context },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
