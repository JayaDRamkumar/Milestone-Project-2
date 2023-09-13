const router = require('express').Router()
const movies = require ("../models/movies")


router.get('/', (req, res) => {
    res.render('movies', {movies})
})

router.get('/new', (req, res) => {
    res.render('new')
  })
  
module.exports = router



