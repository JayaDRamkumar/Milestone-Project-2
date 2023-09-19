const router = require ('express').Router()
const Movies = require('../models/movies')
const Review = require('../models/review')



router.post('/', async (req, res) => {
  if (!req.body.title) {
    req.body.title = 'Any Title'
}
  if (!req.body.rated) {
  req.body.rated = 'Anytown'
}
  if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'https://media.istockphoto.com/id/1454928178/photo/customer-choose-emoji-emoticons-happy-mood-on-emotions-satisfaction-meter-evaluation-increase.webp?b=1&s=170667a&w=0&k=20&c=_eiKzMXlSXPTUAVHRC15DynEiNsOV5CtUHSM9-3anEQ='
  }
  if (!req.body.genre) {
      req.body.genre = 'Not Advised For Users'
  }
if (!req.body.duration) {
  req.body.duration = '100'
}
  const movie = await Movies.create(req.body)
  res.json(movie)
})

// Get all movies
router.get('/', async (req, res) => {
  try{
  const movies = await Movies.find()
  console.log(movies)
  res.json(movies)
}catch(error){
  console.error('Error fecthing movies:', error)
  res.status(500).json({error: 'Unable to fetch movies'})
}
})

//Get a single movie by ID
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movies.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie);
  } catch (error) {
    console.error('Error fetching a movie by ID:', error);
    res.status(500).json({ error: 'Unable to fetch the movie' });
  }
});


// Update a movie by ID
router.put('/:id', async (req, res) => {
  try {
    const { title, rated, pic, genre, duration } = req.body;

    if (!title || !rated || !pic || !genre || !duration) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const updatedMovie = await Movies.findByIdAndUpdate(
      req.params.id,
      {
        title,
        rated,
        pic,
        genre,
        duration,
      },
      { new: true } // Return the updated movie
    );

    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(updatedMovie);
  } catch (error) {
    console.error('Error updating a movie:', error);
    res.status(500).json({ error: 'Unable to update the movie' });
  }
});

// Add a review
router.post('/:id/reviews', async (req, res) => {
  try {
    const { rating, comment } = req.body;

    if (!rating || !comment) {
      return res.status(400).json({ error: 'Rating and comment are required' });
    }

    const movie = await Movies.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    const review = new Review({
      movie: req.params.id,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json(review);
  } catch (error) {
    console.error('Error creating a review:', error);
    res.status(500).json({ error: 'Unable to create a review' });
  }

});


// Delete a movie review by ID
router.delete('/reviews/:reviewId', async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.reviewId);

    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting a review:', error);
    res.status(500).json({ error: 'Unable to delete the review' });
  }
});



module.exports = router


  
 
  

// movies.get('/seed', (req, res) => {
//   Movie.insertMany([{
//     "title":"Scream",
//     "pic":"https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/86/10/14/s6jo_us_2023_poster_1400x2100_nb.jpg",
//     "genre":"Horror",
//     "releaseYear":"2023",
//     "rated": "R",
//     duration:"122"
//   },
// {
//   "title":"Mean Girls",
//     "pic":"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/203c64f4e4b730f90e528076a0fb22c3cc2e9ed4cd3cc9a06f588fe8701b3639._UY500_UX667_RI_TTW_.jpg",
//     "genre":"Comedy",
//     "releaseYear":"2004",
//     "rated": "PG-13",
//     duration:"96"
// },
// {
//   "title":"Forrest Gump",
//   "pic":"https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
//   "genre":"Drama",
//   "releaseYear":"1994",
//   "rated": "PG-13",
//   duration:"142"
// }])
// .then(res.status(200).json({
//   message: 'Seed successful'
// }))
// .catch(res.status(400).json({
//   message: 'Seed unsuccessful'
// }))
// })