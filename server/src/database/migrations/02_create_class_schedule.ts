import knex from 'knex';

// faz alterações
export async function up(knex: knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        // relacionamento
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('class')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    });
};

//desfaz alterações 
export async function down(knex: knex) {
    return knex.schema.dropTable('class_schedule');
};