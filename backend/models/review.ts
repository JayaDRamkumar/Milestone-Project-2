const mongoose1 = require('mongoose')

const reviewSchema = new mongoose1.Schema ({
    name: {type: String, default: 'Anonymous'}, 
    rating: {type: Number, required: true, min: 1, max: 5},
    comment: {type: String, require},
})

module.exports = mongoose1.model('Review', reviewSchema);

