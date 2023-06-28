const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please enter your name'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Please enter your last name'],
      trim: true,
    },
    username: {
      type: String,
      required: [true, 'Please enter your username'],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter your email'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter your password'],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
