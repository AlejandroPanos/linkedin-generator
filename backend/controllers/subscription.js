/* Create imports */
const stripe = require("../config/stripe");
const User = require("../models/user");

/* Helper functions */
async function handleCheckoutComplete(session) {
  const userId = session.metadata.userId;
  const plan = session.metadata.plan;
  const billingPeriod = session.metadata.billingPeriod;

  const user = await User.findById(userId);

  if (!user) {
    console.warn(`Checkout completed for missing user ${userId}`);
    return;
  }

  user.plan = plan;
  user.billingPeriod = billingPeriod;
  user.stripeSubscriptionId = session.subscription;
  user.subscriptionStatus = "active";

  await user.save();
}

async function handleSubscriptionChange(subscription) {
  const user = await User.findOne({ stripeSubscriptionId: subscription.id });

  if (user) {
    user.subscriptionStatus = subscription.status;

    if (subscription.status === "canceled" || subscription.status === "incomplete") {
      user.plan = "free";
    }

    await user.save();
  }
}

/* Create controllers */
exports.createCheckoutSession = async (req, res) => {
  try {
    const userId = req.user.id;
    const { plan, billingPeriod } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let priceId = "";
    if (billingPeriod === "monthly") {
      priceId =
        plan === "business"
          ? process.env.STRIPE_BUSINESS_MONTHLY_PRICE_ID
          : process.env.STRIPE_FREE_PRICE_ID;
    } else {
      priceId = process.env.STRIPE_BUSINESS_YEARLY_PRICE_ID;
    }

    let customerId = user.stripeCustomerId;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { userId: user._id.toString() },
      });
      customerId = customer.id;
      user.stripeCustomerId = customerId;
      await user.save();
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.FRONTEND_URL}/settings?success=true`,
      cancel_url: `${process.env.FRONTEND_URL}/settings?canceled=true`,
      metadata: {
        userId: user._id.toString(),
        plan: plan,
        billingPeriod: billingPeriod,
      },
    });

    res.status(200).json({ sessionId: session.id, sessionUrl: session.url });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.cancelSubscription = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user || !user.stripeSubscriptionId) {
      return res.status(404).json({ error: "Not an active subscription" });
    }

    await stripe.subscriptions.cancel(user.stripeSubscriptionId);

    user.plan = "free";
    user.billingPeriod = "monthly";
    user.subscriptionStatus = "canceled";
    await user.save();

    res.json({ success: true, message: "Subscription canceled" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.handleWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      await handleCheckoutComplete(session);
      break;

    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      const subscription = event.data.object;
      await handleSubscriptionChange(subscription);
      break;

    default:
      break;
  }

  res.json({ received: true });
};
