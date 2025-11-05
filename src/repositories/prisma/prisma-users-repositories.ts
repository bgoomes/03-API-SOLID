import type { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma.ts";
import type { usersRepository } from "../user-repository.ts";

export class PrismaUsersRepository implements usersRepository {
    async create(data : Prisma.UserCreateInput) {
      const user = await prisma.user.create({
           data,
        })
        return user
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        return user
    }
}