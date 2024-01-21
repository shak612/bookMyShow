const express = require('express');
const shows = require('../controllers/shows');

const router = express.Router();

router.post('/post', shows.postShowsController)
router.put('/put', shows.putShowsController)
router.get('/get/:theater_id', shows.getShowsController)
// router.get('/get/:theater_id', shows.getSingleShowsController)

module.exports = router;