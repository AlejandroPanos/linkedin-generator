/* Create imports */
const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/auth");
const subscriptionControllers = require("../controllers/subscription");

/* Create routes */
router.post("/create-checkout-session", requireAuth, subscriptionControllers.createCheckoutSession);
router.post("/cancel", requireAuth, subscriptionControllers.cancelSubscription);
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  subscriptionControllers.handleWebhook,
);

/* Create export */
module.exports = router;
