import { FastifyInstance } from 'fastify';
import fastifySensible from '@fastify/sensible';
import fastifyObjectionjs from 'fastify-objectionjs';
import fastifyCors from '@fastify/cors';

import addRoutes from './routes';
import * as knexConfig from '../knexfile';
import models from './models';

const mode = process.env.NODE_ENV || 'development';

const registerPlugins = async (app: FastifyInstance) => {
  await app.register(fastifySensible);
  await app.register(fastifyObjectionjs, {
    knexConfig: knexConfig[mode as keyof Object],
    models,
  } as any);
  await app.register(fastifyCors);
};

export default async (app: FastifyInstance, _options?: Object) => {
  await registerPlugins(app);
  addRoutes(app);

  return app;
};
