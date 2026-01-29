/* Set up Stripe */
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/* Export Stripe */
module.exports = stripe;
