const router = require('express').Router()
const db = require ("../models")

router.get('/', async (req, res) => {
  const movies = await Movie.findAll()
  res.json(movies)
})
module.exports = router