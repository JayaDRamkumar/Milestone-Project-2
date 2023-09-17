const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pic: String,
  genre: { type: String, required: true },
  rated: { type: String, default: 'Unrated' },
  duration: { type: String, default: '0m' },
  
});

module.exports = mongoose.model('Movie', placeSchema);