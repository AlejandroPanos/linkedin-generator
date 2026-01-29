/* Create imports */
const User = require("../models/user");

/* Create middleware */
exports.checkUsageLimit = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Reset monthly usage if needed
    await user.resetMonthlyUsage();

    // Check if user can generate
    if (!user.canGeneratePost()) {
      const limits = { free: 5, business: 40 };
      return res.status(403).json({
        error: "Monthly limit reached",
        limit: limits[user.plan],
        used: user.monthlyPostsCreated,
        plan: user.plan,
      });
    }

    // Increment usage
    user.monthlyPostsCreated += 1;
    await user.save();

    next();
  } catch (error) {
    console.error("Usage limit check error:", error);
    res.status(500).json({ error: error.message });
  }
};
