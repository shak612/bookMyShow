const express = require('express');
const movies = require('../controllers/movies');

const router = express.Router();

router.post('/post', movies.postMoviesController)
router.put('/put', movies.putMoviesController)
router.get('/get', movies.getMoviesController)
router.get('/get/:movie_id', movies.getSingleMoviesController)

module.exports = router;