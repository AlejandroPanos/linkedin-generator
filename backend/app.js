/* Configure .env */
require("dotenv").config();

/* Create imports */
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const aiRoutes = require("./routes/ai");
const postsRoutes = require("./routes/posts");
const subscriptionRoutes = require("./routes/subscription");
const { checkAuth } = require("./middleware/auth");
const PORT = process.env.PORT;
const URI = process.env.MONGO_DB_URI;

/* Set up Stripe webhook */
app.use("/api/subscription/webhook", express.raw({ type: "application/json" }), subscriptionRoutes);

/* Run parsing middleware */
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());

/* CORS configuration */
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};

/* Consigure CORS */
app.use(cors(corsOptions));

/* Use routes */
app.use(checkAuth);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/subscription", subscriptionRoutes);

/* Connect to MongoDB */
const mongooseConnect = async () => {
  try {
    await mongoose.connect(URI);
    app.listen(PORT, () => {
      console.log(`✅ App listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    console.log("❌ Could not connect to MongoDB");
  }
};
mongooseConnect();
