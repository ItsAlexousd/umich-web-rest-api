const { notFound, errorHandler } = require('./error');
const { verifyToken } = require('./auth');

module.exports = {
  notFound,
  errorHandler,
  verifyToken,
};
