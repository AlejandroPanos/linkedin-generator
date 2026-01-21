/* Create imports */

/* Create controllers */
exports.postGenerate = async (req, res) => {
  try {
    res.status(200).json({ msg: "Post generated" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not generate post" });
  }
};
