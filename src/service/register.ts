import { hash } from "bcryptjs"
import { prisma } from "../lib/prisma.ts"
import { PrismaUsersRepository } from "../repositories/prisma-users-repositories.ts";

interface RegisterUseCaseRequest {
    name: string;
    email: string;
    password: string;
}

export async function RegisterUseCaseRequest({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6)
    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email,
        }
    })
    
    if (userWithSameEmail) {
        throw new Error('E-mail already registered.')
    }
    
    const prismaUsersRepository = new PrismaUsersRepository()

    await prismaUsersRepository.create({
        name,
        email,
        password_hash,
    })
}