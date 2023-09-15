// 


const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pic: String,
  genre: { type: String, required: true },
  rated: { type: String, default: 'Anytown' },
  duration: { type: String, default: 'USA' },
  
});

module.exports = mongoose.model('Movie', placeSchema);