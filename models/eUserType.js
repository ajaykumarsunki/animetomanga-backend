const mongoose = require("mongoose");

const eUserTypeSchema = new mongoose.Schema({
  type: {
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

module.exports = mongoose.model("EUserType", eUserTypeSchema);
