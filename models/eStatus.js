const mongoose = require("mongoose");

const eStatusSchema = new mongoose.Schema({
  status: {
    type: Number,
  },

  desc: {
    type: String,
  },

  descLong: {
    type: String,
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

module.exports = mongoose.model("EStatus", eStatusSchema);
