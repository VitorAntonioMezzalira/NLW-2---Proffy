import knex from 'knex';

// faz alterações
export async function up(knex: knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        // relacionamento
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    });
};

//desfaz alterações 
export async function down(knex: knex) {
    return knex.schema.dropTable('classes');
};