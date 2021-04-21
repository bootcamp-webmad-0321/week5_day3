const express = require('express')
const router = express.Router()

// Endpoints
router.get('/ver', (req, res) => res.render('pages/maps/basic-map'))


module.exports = router