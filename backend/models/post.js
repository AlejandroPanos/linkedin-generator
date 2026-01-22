/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;

/* Create Schema */
const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    topic: {
      type: String,
      required: [true, "Topic is required"],
    },
    tone: {
      type: String,
      enum: ["professional", "casual", "thought-leadership", "storytelling"],
      required: [true, "Tone is required"],
    },
    length: {
      type: Number,
      min: 50,
      max: 300,
      required: [true, "Length is required"],
    },
    context: {
      type: String,
      required: [true, "Context is required"],
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

/* Create methods */

/* Create export */
module.exports = mongoose.model("Post", postSchema);
