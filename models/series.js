const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  altTitle: {
    type: String,
  },

  subTitle: {
    type: String,
  },

  malLink: {
    type: String,
  },

  malRating: {
    type: Number,
  },

  synopsis: {
    type: String,
  },

  reviewShort: {
    type: String,
  },

  reviewLong: {
    type: String,
  },

  airStartYear: {
    type: Number,
  },

  airEndYear: {
    type: Number,
  },

  posterImgId: {
    type: Number,
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

module.exports = mongoose.model("Series", seriesSchema);
