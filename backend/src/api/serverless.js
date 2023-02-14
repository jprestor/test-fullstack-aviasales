import dotenv from 'dotenv';
import Fastify from 'fastify';
import app from './app.js';

dotenv.config();

// Instantiate Fastify with some config
const vercelApp = Fastify({ logger: true });
// Register your application as a normal plugin.
vercelApp.register(app);

export default async (req, res) => {
  await vercelApp.ready();
  vercelApp.server.emit('request', req, res);
};
