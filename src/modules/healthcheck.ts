import { FastifyInstance } from "fastify";

export default async function healtcheck(app: FastifyInstance) {
  app.get('/healthcheck', (request, reply) => {
    reply.send({ name: 'tudo certo' })
  })
}