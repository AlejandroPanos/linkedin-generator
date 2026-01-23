/* Create imports */
const jwt = require("jsonwebtoken");
const User = require("../models/user");

/* Create middleware */
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET, function (error, decodedToken) {
      if (error) {
        res.status(401).json({ error: "User unauthorised" });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ error: "User unauthorised" });
  }
};

const checkAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET, async function (error, decodedToken) {
      if (error) {
        req.user = null;
        next();
      } else {
        const { id } = decodedToken;
        const user = await User.findById(id);
        req.user = user;
        next();
      }
    });
  } else {
    req.user = null;
    next();
  }
};

/* Create exports */
module.exports = { requireAuth, checkAuth };
