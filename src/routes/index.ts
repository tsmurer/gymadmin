// index.ts
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import HomeController from '../controllers/HomeController';

export default async function routes(fastify: FastifyInstance) {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return HomeController.index(request, reply);
  });
}