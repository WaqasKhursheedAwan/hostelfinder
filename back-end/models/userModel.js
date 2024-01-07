const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//    hashing password
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
    user.confirmPassword = await bcrypt.hash(user.confirmPassword, 10);
  }
  next();
});

//   Generating tokens

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });
    this.tokens = this.tokens.concat([{ token: token }]);
    console.log(this.tokens);
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
userSchema.methods.generateAuthToken = async () => {
  try {
    const token = jwt.sign({ _id: this._id }, JWT_SECRET, {
      expiresIn: 8640000,
    });
  } catch (error) {
    console.log("generateAuthToken", error);
  }
};

const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;
