const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
const connectDB = require('./config/db');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
