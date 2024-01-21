const express = require('express');
const shows = require('../controllers/shows');

const router = express.Router();

router.post('/post', shows.postShowsController)
router.put('/put', shows.putShowsController)
router.get('/get', shows.getSingleShowsController)
router.get('/get', shows.getShowsController)

module.exports = router;