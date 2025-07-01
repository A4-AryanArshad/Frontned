const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const News = require('../models/News');

// POST: Add news
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { title, description, tags, category } = req.body;

    const news = new News({
      title,
      description,
      tags: tags.split(','), // assuming tags sent as "tag1,tag2"
      category,
      imageUrl: req.file.path,
    });

    await news.save();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: All news
router.get('/', async (req, res) => {
  const data = await News.find().sort({ createdAt: -1 });
  res.json(data);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});


router.get('/:id', async (req, res) => {
  try {
    const post = await News.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Error fetching post" });
  }
});
module.exports = router;
