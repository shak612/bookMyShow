const express = require('express');
const shows = require('../controllers/shows');

const router = express.Router();

router.post('/post', shows.postShowsController)
router.put('/put', shows.putShowsController)
router.get('/get', shows.getShowsController)
router.get('/get/:show_id', shows.getSingleShowsController)

module.exports = router;