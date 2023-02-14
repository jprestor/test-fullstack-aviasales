import dotenv from 'dotenv';
import Fastify from 'fastify';

dotenv.config();
const Fastify = require('');

// Instantiate Fastify with some config
const app = Fastify({ logger: true });
// Register your application as a normal plugin.
app.register(require('./app.js'));

module.exports = async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
};
