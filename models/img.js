const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  altTitle: {
    type: String,
  },

  subTitle: {
    type: String,
  },

  seriesId: {
    type: Number,
  },

  originalSize: {
    type: String,
  },

  isLargeEnoughForBg: {
    type: Boolean,
  },

  status: {
    type: Number,
  },

  crBy: {
    type: Number,
  },

  crDate: {
    type: Date,
  },

  lModBy: {
    type: Number,
  },

  lModDate: {
    type: Date,
  },

  order: {
    type: Number,
  },
});

module.exports = mongoose.model("Img", imgSchema);
