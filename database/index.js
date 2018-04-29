const knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'jimmykang',
    password: '',
    database: 'testdb',
    charset: 'utf8',
  },
});

knex.schema.hasTable('items').then((exists) => {
  if (!exists) {
    knex.schema.createTable('items', (table) => {
      table.increments('id').primary();
      table.string('description');
      table.decimal('amount', 14, 2);
    }).then(() => console.log('created table users'));
  }
});
