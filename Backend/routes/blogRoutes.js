const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Blog = require('../models/Blog');

// POST: Add a blog
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { title, description, tags, category } = req.body;

    const blog = new Blog({
      title,
      description,
      tags: tags.split(','),
      category,
      imageUrl: req.file.path,
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: All blogs (with optional filter)
router.get('/', async (req, res) => {
  try {
    const { category, tag } = req.query;

    let filter = {};
    if (category) filter.category = category;
    if (tag) filter.tags = { $in: [tag] };

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete a blog by ID
router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/fblogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blog' });
  }
});

module.exports = router;
