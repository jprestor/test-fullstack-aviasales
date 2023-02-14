// @ts-check

export default (app) => {
  app
    .get('/users', {}, async (req, reply) => {
      const users = await app.objection.models.user.query();
      return users;
    })

    .post('/users/check', {}, async (req, reply) => {
      const user = await app.objection.models.user
        .query()
        .findOne({ email: req.body.email });
      return user ? 1 : 0;
    })

    .post('/users/create', async (req, reply) => {
      const validUser = await app.objection.models.user.fromJson(req.body);
      const newUser = await app.objection.models.user.query().insert(validUser);

      return newUser.id;
    });
};
