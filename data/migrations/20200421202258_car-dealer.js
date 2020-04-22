
exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.integer('VIN', 128).notNullable().unique();
    tbl.string('model')
    tbl.string('make')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
