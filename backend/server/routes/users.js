// @ts-check

export default (app) => {
  app
    .get('/users', { name: 'users' }, async (req, reply) => {
      const users = await app.objection.models.user.query();
      reply.render('users/index', { users });
      return reply;
    })
    .get('/users/new', { name: 'newUser' }, (req, reply) => {
      const user = new app.objection.models.user();
      reply.render('users/new', { user });
    })
    .post('/users', async (req, reply) => {
      const user = new app.objection.models.user();
      user.$set(req.body.data);

      try {
        const validUser = await app.objection.models.user.fromJson(
          req.body.data
        );
        await app.objection.models.user.query().insert(validUser);
        req.flash('info', 'some_message');
        reply.redirect(app.reverse('root'));
      } catch ({ data }) {
        req.flash('error', 'some_message');
        reply.render('users/new', { user, errors: data });
      }

      return reply;
    });
};
