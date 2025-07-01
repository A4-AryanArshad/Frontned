const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// Create a new card
router.post('/cards', async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const card = new Card({ title, description, link });
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create card' });
  }
});

// Get all cards
router.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch cards' });
  }
});



router.delete('/cards/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Card.findByIdAndDelete(id);
    res.status(200).json({ message: 'Card deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
