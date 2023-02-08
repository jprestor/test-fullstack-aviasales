// @ts-check
import fastifyFormbody from '@fastify/formbody';
import fastifySecureSession from '@fastify/secure-session';
import fastifyPassport from '@fastify/passport';
import fastifySensible from '@fastify/sensible';
import { plugin as fastifyReverseRoutes } from 'fastify-reverse-routes';
import fastifyMethodOverride from 'fastify-method-override';
import fastifyObjectionjs from 'fastify-objectionjs';
import qs from 'qs';

// @ts-ignore
import addRoutes from './routes/index.js';
import * as knexConfig from '../knexfile.js';
import models from './models/index.js';
import FormStrategy from './lib/passportStrategies/FormStrategy.js';

const mode = process.env.NODE_ENV || 'development';

const addHooks = (app) => {
  app.addHook('preHandler', async (req, reply) => {
    reply.locals = {
      isAuthenticated: () => req.isAuthenticated(),
    };
  });
};

const registerPlugins = async (app) => {
  await app.register(fastifySensible);
  await app.register(fastifyReverseRoutes);
  await app.register(fastifyFormbody, { parser: qs.parse });
  await app.register(fastifySecureSession, {
    secret: process.env.SESSION_KEY,
    cookie: {
      path: '/',
    },
  });

  fastifyPassport.registerUserDeserializer((user) =>
    app.objection.models.user.query().findById(user.id)
  );

  fastifyPassport.registerUserSerializer((user) => Promise.resolve(user));

  fastifyPassport.use(new FormStrategy('form', app));

  await app.register(fastifyPassport.initialize());

  await app.register(fastifyPassport.secureSession());

  await app.decorate('fp', fastifyPassport);
  app.decorate('authenticate', (...args) =>
    fastifyPassport.authenticate(
      'form',
      {
        failureRedirect: app.reverse('root'),
        failureFlash: 'some_message',
      }
      // @ts-ignore
    )(...args)
  );

  await app.register(fastifyMethodOverride);

  await app.register(fastifyObjectionjs, {
    knexConfig: knexConfig[mode],
    models,
  });
};

export const options = {
  exposeHeadRoutes: false,
};

// eslint-disable-next-line no-unused-vars
export default async (app, _options) => {
  await registerPlugins(app);

  addRoutes(app);
  addHooks(app);

  return app;
};
