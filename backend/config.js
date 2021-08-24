require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3080,
  database: process.envDATABASE || 'mongodb://127.0.0.1:27017/to-do-list-app'
};