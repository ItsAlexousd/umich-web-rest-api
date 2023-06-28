const express = require('express');
const router = express.Router();

const { getImages, uploadImage, deleteImage } = require('../controllers');
const { verifyToken } = require('../middlewares');

router.get('/', verifyToken, getImages);
router.post('/', verifyToken, uploadImage);
router.delete('/', verifyToken, deleteImage);

module.exports = router;
