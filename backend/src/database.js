const knex = require('knex');
const { dbConfig } = require('./config');

const dbName = 'tododb';

// Create a connection **without specifying the database**
const db = knex({
  ...dbConfig,
  connection: { ...dbConfig.connection, database: undefined }, // Prevent error if DB doesn't exist
});


async function setupDatabase() {
  // Check if the database exists
  const databases = await db.raw('SHOW DATABASES LIKE ?', [dbName]);
  if (databases[0].length === 0) {
    await db.raw(`CREATE DATABASE ??`, [dbName]);
  }

  // Connect to the newly created database
  const database = knex({
    ...dbConfig,
    connection: { ...dbConfig.connection, database: dbName },
  });

  // Check if the "todos" table exists
  const tableExists = await database.schema.hasTable('todos');
  if (!tableExists) {
    await database.schema.createTable('todos', (table) => {
      table.increments('id').primary();
      table.string('text', 255).notNullable();
      table.boolean('done').notNullable().defaultTo(false);
    });
  }

  // Close the setup connections
  await db.destroy();

  return database;
}

module.exports = setupDatabase;