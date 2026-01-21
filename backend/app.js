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
const PORT = process.env.PORT;
const URI = process.env.MONGO_DB_URI;

/* Run parsing middleware */
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());

/* Consigure CORS */
app.use(cors());

/* Use routes */
app.use("/api/auth", authRoutes);

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
