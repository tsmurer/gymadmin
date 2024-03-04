// HomeController.ts
import { FastifyRequest, FastifyReply } from 'fastify';

const HomeController = {
  index: async (request: FastifyRequest, reply: FastifyReply) => {
    return { message: 'Hello, world!' };
  },
};

export default HomeController;