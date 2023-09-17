const db = require('../models')
const movies = express.Router()
const router = require ('express').Router

const { Movie, Review, User } = db

movies.get('/seed', (req, res) => {
  Movie.insertMany([{
    "title":"Scream",
    "pic":"https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/86/10/14/s6jo_us_2023_poster_1400x2100_nb.jpg",
    "genre":"Horror",
    "releaseYear":"2023",
    "rated": "R",
    duration:"122"
  },
{
  "title":"Mean Girls",
    "pic":"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/203c64f4e4b730f90e528076a0fb22c3cc2e9ed4cd3cc9a06f588fe8701b3639._UY500_UX667_RI_TTW_.jpg",
    "genre":"Comedy",
    "releaseYear":"2004",
    "rated": "PG-13",
    duration:"96"
},
{
  "title":"Forrest Gump",
  "pic":"https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
  "genre":"Drama",
  "releaseYear":"1994",
  "rated": "PG-13",
  duration:"142"
}])
.then(res.status(200).json({
  message: 'Seed successful'
}))
.catch(res.status(400).json({
  message: 'Seed unsuccessful'
}))
})

// Get all movies
router.get('/', async (req, res) => {
  try {
   movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Unable to fetch movies' });
  }
})

//Get a single movie by ID
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    console.error('Error fetching a movie by ID:', error);
    res.status(500).json({ error: 'Unable to fetch the movie' });
  }
})

// router.get('/', (req, res) => {
//   db.Movie.find()
//   .then((movies) => {
//     res.render('movies/index', { movies })
//   })
//   .catch(err => {
//     console.log(err) 
//     res.render('error404')
//   })
// })

// router.post('/', (req, res) => {
// res.send('POST /movies stub')
// })

// router.get('/new', (req, res) => {
// res.render('movies/new')
// })

// router.get('/:id', (req, res) => {
// res.send('GET /movies/:id stub')
// })

// router.put('/:id', (req, res) => {
// res.send('PUT /movies/:id stub')
// })

// router.delete('/:id', (req, res) => {
// res.send('DELETE /movies/:id stub')
// })

// router.get('/:id/edit', (req, res) => {
// res.send('GET edit form stub')
// })

// router.post('/:id/rant', (req, res) => {
// res.send('GET /places/:id/rant stub')
// })

// router.delete('/:id/rant/:rantId', (req, res) => {
//   res.send('GET /places/:id/rant/:rantId stub')
// })
// // router.get('/', (req, res) => {
// //     res.render('movies', {movies})
// // })

// // router.get('/new', (req, res) => {
// //     res.render('new')
// //   })

// //   router.get('/:id', (req, res) => {
// //     res.send('GET /movies/:id stub')
// //   })
  
// //   router.put('/:id', (req, res) => {
// //     res.send('PUT /movies/:id stub')
// //   })
  
// //   router.delete('/:id', (req, res) => {
// //     res.send('DELETE /movies/:id stub')
// //   })
  
// //   router.get('/:id/edit', (req, res) => {
// //     res.send('GET edit form stub')
// //   })
  
// //   router.post('/:id/rant', (req, res) => {
// //     res.send('GET /movies/:id/rant stub')
// //   })
  
// //   router.delete('/:id/rant/:rantId', (req, res) => {
// //       res.send('GET /movies/:id/rant/:rantId stub')
// //   })
  


//   // router.get('/:id', (req, res) => {
//   //   let id = Number(req.params.id)
//   //   if (isNaN(id)) {
//   //     res.render('error404')
//   //   }
//   //   else if (!movies[id]) {
//   //     res.render('error404')
//   //   }
//   //   else {
//   //     res.render('movies/show', { movie: movies[id] })


//   //   }
//   // })
  
//   // router.get('/:id', (req, res) => {
//   //   res.render('movies/show')
//   // })
  
// //   // router.post('/', (req, res) => {
    
// //   //   if (!req.body.pic) {
// //   //     // Default image if one is not provided
// //   //     req.body.pic = 'https://media.istockphoto.com/id/1454928178/photo/customer-choose-emoji-emoticons-happy-mood-on-emotions-satisfaction-meter-evaluation-increase.webp?b=1&s=170667a&w=0&k=20&c=_eiKzMXlSXPTUAVHRC15DynEiNsOV5CtUHSM9-3anEQ='
// //   //   }
// //   //   if (!req.body.genre) {
// //   //     req.body.genre = 'Anytown'
// //   //   }
// //   //   if (!req.body.rated) {
// //   //     req.body.rated = 'Not Advised For Users'
// //   //   }
// //   //   if (!req.body.duration) {
// //   //       req.body.duration = 'Not Advised For Users'
// //   //     }
// //   //   movies.push(req.body)
// //   //   res.redirect('/movies')
// //   // })
  
  
  
// // module.exports = router

// const router = require('express').Router()
// const places = require("../models/movies")


// router.get('/', (req, res) => {
//     res.render('moviess/index', {movies})
// })

// router.get('/new', (req, res) => {
//   res.render('movies/new')
// })

// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!movies[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('movies/show', { movie: movies[id], id: id })
//   }
// })

// router.get('/:id', (req, res) => {
//   res.render('movies/show')
// })

// router.post('/', (req, res) => {
//     console.log(req.body)
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = 'https://media.istockphoto.com/id/1454928178/photo/customer-choose-emoji-emoticons-happy-mood-on-emotions-satisfaction-meter-evaluation-increase.webp?b=1&s=170667a&w=0&k=20&c=_eiKzMXlSXPTUAVHRC15DynEiNsOV5CtUHSM9-3anEQ='
//     }
//     if (!req.body.genre) {
//       req.body.genre = 'Any Genre'
//     }
//     if (!req.body.rated) {
//       req.body.rated = 'UNRATED'
//     }
//     if (!req.body.duration) {
//               req.body.duration = 'Not Advised For Users'
//             }
//     places.push(req.body)
//     res.redirect('/movies')
// })



// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('movies/edit', { movie: movies[id], id: id })
//   }
// })

// router.delete('/:id', (req, res) => {
//   console.log(req.body)
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/movies')
//   }
// })

// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)

//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//         // Default image if one is not provided
//         req.body.pic = 'https://media.istockphoto.com/id/1454928178/photo/customer-choose-emoji-emoticons-happy-mood-on-emotions-satisfaction-meter-evaluation-increase.webp?b=1&s=170667a&w=0&k=20&c=_eiKzMXlSXPTUAVHRC15DynEiNsOV5CtUHSM9-3anEQ='
//       }
//       if (!req.body.genre) {
//         req.body.genre = 'Any Genre'
//       }
//       if (!req.body.rated) {
//         req.body.rated = 'UNRATED'
//       }
//       if (!req.body.duration) {
//                 req.body.duration = 'Not Advised For Users'
//               }

//       // Save the new data into places[id]
//       movies[id] = req.body
//       res.redirect(`/moviess/${id}`)
//   }
// })

const router = require('express').Router()
const db = require ("../models")

router.get('/', async (req, res) => {
  const movies = await Movie.findAll()
  res.json(movies)
})
module.exports = router