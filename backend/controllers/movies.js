const router = require('express').Router()
const movies = require ("../models/movies")


router.get('/', (req, res) => {
    res.render('movies', {movies})
})

module.exports = router



