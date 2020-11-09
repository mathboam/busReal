const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: String,
  body: String,
});

module.exports = mongoose.model("ArticleModel", ArticleSchema);
