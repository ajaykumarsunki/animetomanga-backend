const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 200,
  },
  altTitle: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  postType: {
    type: Number,
  },
  posterImgId: {
    type: Number,
  },
  bgImgId: {
    type: Number,
  },
  intro: {
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

module.exports = mongoose.model("Post", postSchema);
