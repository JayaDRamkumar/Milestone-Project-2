const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema ({
    name: {type: String, default: 'Anonymous'}, 
    rating: {type: Number, required: true, min: 1, max: 5},
    comment: {type: String, require},
})

module.exports = mongoose.model('Review', reviewSchema);

