import Fastify from "fastify";
import routes from "./routes/index.js";
import type { FastifyInstance } from "fastify";

const app: FastifyInstance = Fastify({
    logger: true
});

app.register(routes)

export default app;