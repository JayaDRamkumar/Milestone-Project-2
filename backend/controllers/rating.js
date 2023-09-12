const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /rating')
})

module.exports = router
