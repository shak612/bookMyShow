const express = require('express');
const users = require('../controllers/users');

const router = express.Router();

router.post('/post', users.postUsersController)
router.put('/put', users.putUsersController)
router.get('/get', users.getUsersController)
router.get('/get/:user_id', users.getSingleUsersController)

module.exports = router;