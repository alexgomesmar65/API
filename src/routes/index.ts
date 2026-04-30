import type { FastifyInstance } from "fastify";

async function routes(fastify: FastifyInstance): Promise<void> {
	fastify.get("/health", async () => {
		return {
			status: "ok",
			message: "LereBills rodando normalmente!",
		};
	});
}

export default routes;
