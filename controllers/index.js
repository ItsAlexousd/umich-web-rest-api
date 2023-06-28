const { getUsers, signUp, signIn } = require('./user');
const { getImages, uploadImage, deleteImage } = require('./image');

module.exports = {
  getUsers,
  signUp,
  signIn,
  getImages,
  uploadImage,
  deleteImage,
};
