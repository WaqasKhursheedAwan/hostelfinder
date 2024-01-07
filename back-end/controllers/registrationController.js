const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    const UserExist = await User.findOne({ email: email });
    if (UserExist) {
      return res.status(422).json({ error: "User already exist" });
    }

    const user = new User({ name, email, password, confirmPassword });

    await user.save();

    res.status(201).json({ message: "User Registered Succuessfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
