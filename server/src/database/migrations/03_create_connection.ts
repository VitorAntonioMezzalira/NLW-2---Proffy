import knex from 'knex';

// faz alterações
export async function up(knex: knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        // relacionamento
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
};

//desfaz alterações 
export async function down(knex: knex) {
    return knex.schema.dropTable('connection');
};