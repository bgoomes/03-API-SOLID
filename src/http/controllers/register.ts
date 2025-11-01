import type { FastifyRequest, FastifyReply } from "fastify"
import z from "zod"
import { RegisterUseCaseRequest } from "../../service/register.ts"


export async function register (request: FastifyRequest, reply: FastifyReply) {
    const registerUserBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = registerUserBodySchema.parse(request.body)
    
    try {
        await RegisterUseCaseRequest({ name, email, password })
    } catch (err) {
        return reply.status(409).send({ message: (err as Error).message })  
    }

    return reply.status(201).send()
}