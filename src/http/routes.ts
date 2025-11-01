import type { FastifyInstance } from "fastify"
import { register } from "./controllers/register.ts"


export async function appRouter(app: FastifyInstance) {
    app.post('/users', register)
}