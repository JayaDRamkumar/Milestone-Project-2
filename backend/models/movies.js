// 
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pic: String,
  genre: { type: String, required: true },
  releaseYear:{type: Number, required: true},
  rated: { type: String, required: true },
  duration: { type: Number, required: true },
  
});

module.exports = mongoose.model('Movie', movieSchema);