
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.string('id').primary();
        table.string('name').nullable();
        
        table.integer('stateId').notNullable();
        table.foreign('stateId').references('id').inTable('states');
        
        table.date('birthday').nullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
