const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videos: [
    {
      url: String,
      name: String,
      driveLink: String, // Optional Google Drive link for slides
    }
  ],
  pdfs: [
    {
      url: String,
      name: String,
    }
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', CourseSchema); 