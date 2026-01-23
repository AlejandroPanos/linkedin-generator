/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Anthropic = require("@anthropic-ai/sdk");
const { systemPrompt, userPrompt } = require("../helpers/prompt");

/* Create anthropic */
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

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
      enum: [
        "professional",
        "casual",
        "thought-leadership",
        "storytelling",
        "educational",
        "inspirational",
      ],
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
postSchema.statics.createPost = async function (topic, tone, length, context) {
  // Validate input
  if (!topic || !tone || !length || !context) {
    res.status(400).json({ error: "All fields are required" });
  }

  // Call Anthropic API
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt(topic, tone, length, context) }],
  });

  // Get generated content
  const generatedContent = message.content[0].text;

  return generatedContent;
};

/* Create export */
module.exports = mongoose.model("Post", postSchema);
