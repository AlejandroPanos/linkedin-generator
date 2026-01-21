/* Create imports */

/* Create controllers */
exports.getPosts = async (req, res) => {
  try {
    res.status(200).json({ msg: "All posts fetched successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not get your posts" });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    res.status(200).json({ msg: "Favorite posts fetched successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not get your favorite posts" });
  }
};

exports.postSavePost = async (req, res) => {
  try {
    res.status(200).json({ msg: "Post saved" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not save your post" });
  }
};

exports.patchPost = async (req, res) => {
  try {
    res.status(200).json({ msg: "Post status changed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not modify your post" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    res.status(200).json({ msg: "Post deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not delete your post" });
  }
};
