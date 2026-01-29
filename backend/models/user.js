/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const crypto = require("crypto");

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
    plan: {
      type: String,
      enum: ["free", "business"],
      default: "free",
    },
    billingPeriod: {
      type: String,
      enum: ["monthly", "yearly"],
      default: "monthly",
    },
    stripeCustomerId: {
      type: String,
    },
    stripeSubscriptionId: {
      type: String,
    },
    subscriptionStatus: {
      type: String,
      enum: ["active", "canceled", "past_due", "incomplete"],
      default: "active",
    },
    monthlyPostsCreated: {
      type: Number,
      default: 0,
    },
    lastResetDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

/* Create methods */
userSchema.virtual("gravatarUrl").get(function () {
  const hash = crypto.createHash("md5").update(this.email.toLowerCase().trim()).digest("hex");
  return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
});

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

userSchema.pre("save", async function () {
  if (!this.isModified("password") || !this.password) {
    return;
  }

  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    throw new Error("Password operation failed");
  }
});

userSchema.methods.canGeneratePost = function () {
  const limits = {
    free: 5,
    business: 40,
  };

  return this.monthlyPostsCreated < limits[this.plan];
};

userSchema.methods.resetMonthlyUsage = function () {
  const now = new Date();
  const lastReset = new Date(this.lastResetDate);

  if (now.getMonth() !== lastReset.getMonth() || now.getFullYear() !== lastReset.getFullYear()) {
    this.monthlyPostsCreated = 0;
    this.lastResetDate = now;
    return this.save();
  }
};

/* Create export */
module.exports = mongoose.model("User", userSchema);
