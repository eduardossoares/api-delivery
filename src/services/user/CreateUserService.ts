import { prismaClient } from "../../prisma"
import { hash } from "bcryptjs"

interface CreateUserRequest {
    name: string
    email: string
    password: string
}

export class CreateUserService {
    async execute({name, email, password}: CreateUserRequest) {
        if(!name) throw new Error("Invalid name");
        if(!email) throw new Error("Invalid email");
        if(!password) throw new Error("Invalid password");

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email.toLocaleLowerCase()
            }
        });

        if(userAlreadyExists) throw new Error("Email already registered");

        // Criptografando Senha
        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email.toLocaleLowerCase(),
                password: passwordHash
            },

            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
            }
        });

        return user;
    }
}