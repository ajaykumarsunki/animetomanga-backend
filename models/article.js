const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const articleSchema = new mongoose.Schema({
  postId: {
    type: Number,
  },

  title: {
    type: String,
  },

  altTitle: {
    type: String,
  },

  subTitle: {
    type: String,
  },

  intro: {
    type: String,
  },

  review: {
    type: String,
  },

  preText: {
    type: String,
  },

  postText: {
    type: String,
  },

  metaTags: {
    type: String,
  },

  status: {
    type: Number,
  },

  crBy: {
    type: Number,
  },
  crDate: {
    type: Date,
    default: Date.now(),
  },
  lModBy: {
    type: Number,
  },
  lModDate: {
    type: Date,
    default: Date.now(),
  },
  order: {
    type: Number,
  },
});

module.exports = mongoose.model("Article", articleSchema);
