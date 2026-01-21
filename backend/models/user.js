/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { isEmail } = require("validator");

/* Create Schema */
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      validate: isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

/* Create methods */
userSchema.statics.register = async function (name, email, password) {
  if (!name || !email || !password) {
    throw new Error("All fields required");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("User already exists");
  }

  const newUser = await this.create({
    name,
    email,
    password,
  });

  return newUser;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields required");
  }

  const currentUser = await this.findOne({ email }).select("+password");
  if (!currentUser) {
    throw new Error("User does not exist yet");
  }

  const match = await bcrypt.compare(password, currentUser.password);
  if (!match) {
    throw new Error("Password is invalid");
  }

  const user = await this.findOne({ email }).select("-password");

  return user;
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) {
    return;
  }

  try {
    this.password = await bcrypt.hash(this.password);
  } catch (error) {
    next(error);
  }
});

/* Create export */
module.exports = mongoose.model("User", userSchema);
