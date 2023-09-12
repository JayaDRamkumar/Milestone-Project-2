const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /reviews')
})

module.exports = router
