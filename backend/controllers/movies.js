const db = require('../models')
const router = require ('express').Router()

const { Movie, Review, User } = db


router.post('/', async (req, res) => {
  if (!req.body.title) {
    req.body.title = 'Any Title'
}
  if (!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.genre) {
      req.body.city = 'comedy'
  }
  if (!req.body.releaseYear) {
      req.body.state = '2023'
  }
  if (!req.body.rated) {
    req.body.state = 'R'
}
if (!req.body.duration) {
  req.body.state = '100'
}
  const movie = await Movie.create(req.body)
  res.json(movie)
})

// Get all movies
router.get('/', async (req, res) => {
  const movies = await Movie.findAll()
  res.json(movies)
})

//Get a single movie by ID
router.get('/:movieId', async (req, res) => {
  let movieId = Number(req.params.movieId)
  if (isNaN(movieIdId)) {
      res.status(404).json({ message: `Invalid id "${movieId}"` })
  } else {
      const movie = await Movie.findOne({
          where: { movieId: movieId },
          include: {
              association: 'review',
              include: 'user'
          }
      })
      if (!movie) {
          res.status(404).json({ message: `Could not find place with id "${movieId}"` })
      } else {
          res.json(movie)
      }
  }
})

router.put('/:movieId', async (req, res) => {
  let movieId = Number(req.params.movieId)
  if (isNaN(movieId)) {
      res.status(404).json({ message: `Invalid id "${movieId}"` })
  } else {
      const movie = await Movie.findOne({
          where: { movieId: movieId },
      })
      if (!movie) {
          res.status(404).json({ message: `Could not find movie with id "${movieId}"` })
      } else {
          Object.assign(movie, req.body)
          await movie.save()
          res.json(movie)
      }
  }
})

// router.post('/:placeId/reviews', async (req, res) => {
//   const movieId = Number(req.params.movieId)

//   req.body.rant = req.body.rant ? true : false

//   const place = await Place.findOne({
//       where: { placeId: placeId }
//   })

//   if (!place) {
//       res.status(404).json({ message: `Could not find place with id "${placeId}"` })
//   }

//   const author = await User.findOne({
//       where: { userId: req.body.authorId }
//   })

//   if (!author) {
//       res.status(404).json({ message: `Could not find author with id "${req.body.authorId}"` })
//   }

//   const comment = await Comment.create({
//       ...req.body,
//       placeId: placeId
//   })

//   res.send({
//       ...comment.toJSON(),
//       author
//   })
// })


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

// const router = require('express').Router()
// const db = require ("../models")

// router.get('/', async (req, res) => {
//   const movies = await Movie.findAll()
//   res.json(movies)
// })
// module.exports = router

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