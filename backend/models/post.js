/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;

/* Create Schema */
const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    topic: {
      type: String,
      required: [true, "Topic is required"],
    },
    tone: {
      type: String,
      required: [true, "Tone is required"],
    },
    length: {
      enum: ["short", "medium", "long"],
      required: [true, "Length is required"],
    },
    context: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

/* Create methods */

/* Create export */
module.exports = mongoose.model("Post", postSchema);
