import * as dotenv from 'dotenv';
dotenv.config();
import Fastify from 'fastify';

const server = Fastify({ logger: true });

server.register(import('../src/app'));

server.listen({ port: Number(process.env.PORT) || 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
