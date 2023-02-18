import * as dotenv from 'dotenv';
import Fastify from 'fastify';

dotenv.config();

const server = Fastify({ logger: true });

server.register(import('./app'));

const port = parseInt(process.env.PORT as string, 10) || 3000;
server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
