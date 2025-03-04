const { dbConfig } = require('./config');

const database = require('knex')(dbConfig);

module.exports = database;