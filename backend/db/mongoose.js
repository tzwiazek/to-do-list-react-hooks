const mongoose = require('mongoose');
const { database } = require('../config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(database, options);