const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: {
    type: String,
  },

  pswd: {
    type: String,
  },

  firstName: {
    type: String,
  },

  middleName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  phone: {
    type: String,
  },

  email: {
    type: String,
  },

  userType: {
    type: Number,
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

module.exports = mongoose.model("User", userSchema);
