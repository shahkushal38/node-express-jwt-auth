const User = require("../models/User");

module.exports.signup_get = (req, res) => {
  res.render("signup");
};
module.exports.login_get = (req, res) => {
  res.render("login");
};
module.exports.login_post = (req, res) => {
  const { email, password } = req.body;
  console.log("req-- ", email, "pass--- ", password);
  res.send("Login Request");
};
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  console.log("req-- ", email, "pass--- ", password);
  // res.send("signup request")
  try {
    const user = await User.create({ email, password });
    res.status(200).json(user);
  } catch (err) {
    console.log("Error--", err);
    res.status(400).send("Error in creating user");
  }
};
