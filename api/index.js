const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/users', require('./user'));
router.use('/images', require('./image'));

module.exports = router;
