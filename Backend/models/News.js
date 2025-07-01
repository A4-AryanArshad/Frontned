const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], // array of tags
    default: [],
  },
  category: {
    type: String,
    default: 'General',
  },
  imageUrl: {
    type: String,
    required: true, // since Cloudinary will return a path
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('News', newsSchema);
