// @ts-check
import fastifySensible from '@fastify/sensible';
import fastifyObjectionjs from 'fastify-objectionjs';
import fastifyCors from '@fastify/cors';

// @ts-ignore
import addRoutes from './routes/index.js';
import * as knexConfig from '../knexfile.js';
import models from './models/index.js';

const mode = process.env.NODE_ENV || 'development';

const registerPlugins = async (app) => {
  await app.register(fastifySensible);
  await app.register(fastifyObjectionjs, {
    knexConfig: knexConfig[mode],
    models,
  });
  await app.register(fastifyCors);
};

export const options = {};

// eslint-disable-next-line no-unused-vars
export default async (app, _options) => {
  await registerPlugins(app);
  addRoutes(app);

  return app;
};
