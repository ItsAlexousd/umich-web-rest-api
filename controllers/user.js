const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const signUp = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  if (!firstName || !lastName || !username || !email || !password) {
    return res.status(400).send({ message: 'Missing fields.' });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .send({ message: 'Username or email already exists.' });
    }

    const user = User({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: bcrypt.hashSync(password),
    });

    const savedUser = await user.save();
    res.status(201).send({ id: savedUser._id });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const signIn = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ message: 'Missing fields.' });
  }

  try {
    const user = await User.findOne({
      $or: [{ email: username }, { username: username }],
    }).lean();

    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid password!',
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      user: user,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  getUsers,
  signUp,
  signIn,
};
