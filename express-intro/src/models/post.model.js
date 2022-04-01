const mongoose = require("mongoose");

// step 2 - Schema
const postSchema = new mongoose.Schema(
  {
    image: { type: String },
    title: { type: String, default: "yo yo" },
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

// step 3 - Model
module.exports = mongoose.model("post", postSchema); // post => posts
