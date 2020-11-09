const mongoose = require("mongoose");
const ArticleModel = require("./ArticleModel");
const AuthorSchema = new mongoose.Schema({
  name: String,
  contact: String,
  profession: String,
  articles: [{ type: mongoose.Types.ObjectId, ref: ArticleModel }],
});

module.exports = mongoose.model("AuthorModel", AuthorSchema);
