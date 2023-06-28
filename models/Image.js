const mongoose = require('mongoose');

const imageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
      trim: true,
    },
    url: {
      type: String,
      required: [true, 'Please enter a url'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Image', imageSchema);
