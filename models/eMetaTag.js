const mongoose = require("mongoose");

const eMetaTagSchema = new mongoose.Schema({
  tagName: {
    type: String,
  },

  desc: {
    type: String,
  },

  descLong: {
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

module.exports = mongoose.model("EMetaTag", eMetaTagSchema);
