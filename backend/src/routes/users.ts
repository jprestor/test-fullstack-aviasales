import { FastifyInstance } from 'fastify';

export default (app: FastifyInstance) => {
  app
    .get('/', {}, async (req, reply) => {
      return { hello: 'world' };
    })

    .get('/users', {}, async (req, reply) => {
      const { models }: any = app.objection;
      const users = await models.user.query();
      return users;
    })

    .post<{ Body: { email: string } }>(
      '/users/check',
      {},
      async (req, reply) => {
        const { models }: any = app.objection;
        const user = await models.user
          .query()
          .findOne({ email: req.body.email });
        return user ? 1 : 0;
      }
    )

    .post<{ Body: { email: string } }>('/users/create', async (req, reply) => {
      const { models }: any = app.objection;
      const validUser = await models.user.fromJson(req.body);
      const newUser = await models.user.query().insert(validUser);

      return newUser.id;
    });
};
