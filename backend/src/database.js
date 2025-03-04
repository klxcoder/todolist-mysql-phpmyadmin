const { databaseConnectionObject } = require('./config');

const database = require('knex')(databaseConnectionObject);

module.exports = database;