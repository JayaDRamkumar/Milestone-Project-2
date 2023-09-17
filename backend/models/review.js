const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema ({
    movie: {type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie', // Reference to the Movie model
        required: true,
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    rating: {type: Number, required: true, min: 1, max: 5
    },
    comment: {type: String, require},
    createdAt: { type: Date, default: Date.now}
})

module.exports = mongoose.model('Review', reviewSchema);

