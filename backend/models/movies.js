// 
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rated: { type: String, required: true },
  pic: String,
  genre: { type: String, required: true },
  duration: { type: String, required: true },
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});

module.exports = mongoose.model('Movies', movieSchema);