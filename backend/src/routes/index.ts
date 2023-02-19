import { type FastifyInstance } from 'fastify';
import users from './users.js';

const controllers = [users];

export default (app: FastifyInstance) =>
  controllers.forEach((controller) => controller(app));
