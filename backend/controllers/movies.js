const router = require('express').Router()
const movies = require ("../models/movies")


router.get('/', (req, res) => {
    res.render('movies', {movies})
})

router.get('/new', (req, res) => {
    res.render('new')
  })

  router.get('/:id', (req, res) => {
    res.render('movies/show')
  })
  
  router.post('/', (req, res) => {
    
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'https://media.istockphoto.com/id/1454928178/photo/customer-choose-emoji-emoticons-happy-mood-on-emotions-satisfaction-meter-evaluation-increase.webp?b=1&s=170667a&w=0&k=20&c=_eiKzMXlSXPTUAVHRC15DynEiNsOV5CtUHSM9-3anEQ='
    }
    if (!req.body.genre) {
      req.body.genre = 'Anytown'
    }
    if (!req.body.rated) {
      req.body.rated = 'Not Advised For Users'
    }
    if (!req.body.duration) {
        req.body.duration = 'Not Advised For Users'
      }
    movies.push(req.body)
    res.redirect('/movies')
  })
  
  
  
module.exports = router



