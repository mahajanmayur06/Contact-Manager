const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide your contact name"],
    },
    email: {
      type: String,
      require: [true, "Please provide your email"],
    },
    phone: {
      type: Number,
      require: [true, "Please provide your phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model( "Contact", contactSchema);