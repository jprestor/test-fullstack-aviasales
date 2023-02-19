import { describe, beforeAll, afterEach, afterAll, it, expect } from 'vitest';
import fastify, { type FastifyInstance } from 'fastify';

import init from '../src/app.js';

describe('requests', () => {
  let app: FastifyInstance;
  let knex: any;
  let models: any;

  beforeAll(async () => {
    app = fastify({ logger: true });
    await init(app);
    knex = app.objection.knex;
    models = app.objection.models;
    await knex.migrate.latest();
  });

  it('check user exist', async () => {
    const data = { email: 'example1@gmail.com' };

    let response = await app.inject({
      method: 'POST',
      url: '/users/check',
      payload: data,
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ isExist: false });

    await models.user.query().insert(data);

    response = await app.inject({
      method: 'POST',
      url: '/users/check',
      payload: data,
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ isExist: true });
  });

  it('create user', async () => {
    const data = { email: 'example1@gmail.com' };

    let response = await app.inject({
      method: 'POST',
      url: '/users/create',
      payload: data,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('1');

    response = await app.inject({
      method: 'POST',
      url: '/users/create',
      payload: data,
    });
    expect(response.statusCode).toBe(400);
  });

  afterEach(async () => {
    await models.user.query().truncate();
  });

  afterAll(async () => {
    await app.close();
  }); //
});
