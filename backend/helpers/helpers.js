/* Create imports */
const jwt = require("jsonwebtoken");

/* Create helpers */
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "1d" });
};

const maxAge = 24 * 60 * 60 * 1000;

/* Create exports */
module.exports = { createToken, maxAge };
