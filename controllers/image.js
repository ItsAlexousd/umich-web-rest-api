const Image = require('../models/image');

const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.send(images);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const uploadImage = async (req, res) => {
  const { title, url, description } = req.body;

  if (!title || !url || !description) {
    return res.status(400).send({ message: 'Missing fields.' });
  }

  try {
    const existingImage = await Image.findOne({
      $or: [{ title: title }, { url: url }],
    });

    if (existingImage) {
      return res.status(400).send({ message: 'Title or url already exists.' });
    }

    const image = Image({
      title: title,
      url: url,
      description: description,
      user: req.user._id,
    });

    const savedImage = await image.save();
    res.status(201).send({ id: savedImage._id });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const deleteImage = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findOne({ _id: id });

    if (!image) {
      return res.status(404).send({ message: 'Image not found.' });
    }

    await image.delete();
    res.send({ message: 'Image deleted.' });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  getImages,
  uploadImage,
  deleteImage,
};
