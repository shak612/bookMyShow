const express = require('express');
const theaters = require('../controllers/theaters');

const router = express.Router();

router.post('/post', theaters.postTheatersController)
router.put('/put', theaters.putTheatersController)
router.get('/get', theaters.getTheatersController)
router.get('/get/:theater_id', theaters.getSingleTheatersController)

module.exports = router;