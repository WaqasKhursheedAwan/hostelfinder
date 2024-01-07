const User = require("../models/userModel");

exports.login = async (req, res) => {
  console.log("login");
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    const token = await user.generateAuthToken();
    res.cookie("jwttoken", token, {
      expires: new Date(Date.now() + 86400000),
      httpOnly: true,
    });
    if (!isMatch) {
      return res.status(422).json({ error: "Password is incorrect" });
    }

    res.status(200).json({
      message: "User Successfully Login",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
