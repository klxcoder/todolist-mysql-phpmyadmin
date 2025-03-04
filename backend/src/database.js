const config = require('./config');

const database = require('knex')(config);

module.exports = database;