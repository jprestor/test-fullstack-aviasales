import { Knex } from 'knex';

export const up = (knex: Knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

export const down = (knex: Knex) => knex.schema.dropTable('users');
