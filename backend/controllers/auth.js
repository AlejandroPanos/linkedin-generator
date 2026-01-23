/* Create imports */
const User = require("../models/user");
const { createToken, maxAge } = require("../helpers/helpers");

/* Create controllers */
exports.getLoggedUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.postRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.register(name, email, password);

    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge, httpOnly: true, secure: true, sameSite: "none" });
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge, httpOnly: true, secure: true, sameSite: "none" });
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.postLogout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1, httpOnly: true, secure: true, sameSite: "none" });
    res.status(200).json({ msg: "User logged out" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
