// Vercel serverless app
import Fastify from 'fastify';
import * as dotenv from 'dotenv';
dotenv.config();

const app = Fastify({ logger: true });

// Register your application as a normal plugin.
app.register(import('../dist/src/app.js'));

export default async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
};
