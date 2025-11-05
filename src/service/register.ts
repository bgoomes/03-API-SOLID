import { hash } from "bcryptjs"
import type { usersRepository } from "../repositories/user-repository.ts";
import { UserAlreadyExistsError } from "./erros/user-already-exists.ts";

interface RegisterUseCaseRequest {
    name: string;
    email: string;
    password: string;
}

export class RegisterUseCase {
    constructor(private usersRepository: usersRepository){}

    async execute({ name, email, password }: RegisterUseCaseRequest) {
        const password_hash = await hash(password, 6)

        const userWithSameEmail = await this.usersRepository.findByEmail(email)

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }
  
        await this.usersRepository.create({
            name,
            email,
            password_hash,
        })
  }
}