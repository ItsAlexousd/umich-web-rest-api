const express = require('express');
const router = express.Router();

const { getUsers, signUp, signIn } = require('../controllers');
const { verifyToken } = require('../middlewares');

router.get('/', verifyToken, getUsers);
router.post('/signUp', signUp);
router.post('/signIn', signIn);

module.exports = router;
