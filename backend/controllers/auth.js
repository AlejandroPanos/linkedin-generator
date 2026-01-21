/* Create imports */

/* Create controllers */
exports.getLoggedUser = async (req, res) => {
  try {
    res.status(200).json({ msg: "Got logged user" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not get user" });
  }
};

exports.postRegister = async (req, res) => {
  try {
    res.status(200).json({ msg: "User registered" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not register user" });
  }
};

exports.postLogin = async (req, res) => {
  try {
    res.status(200).json({ msg: "User logged in" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not log in user" });
  }
};

exports.postLogout = async (req, res) => {
  try {
    res.status(200).json({ msg: "User logged out" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not log user out" });
  }
};
