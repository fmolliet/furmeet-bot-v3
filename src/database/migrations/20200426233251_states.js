
exports.up = function(knex) {
    return knex.schema.createTable('states', function(table){
        table.increments('id');
        table.string('name').notNullable();
        table.string('uf').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('states');
};
