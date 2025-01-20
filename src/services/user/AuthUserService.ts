import { compare } from "bcryptjs";
import { prismaClient } from "../../prisma";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    password: string;
}

export class AuthUserService {
    async execute({email, password}: AuthRequest) {
        if(!email) throw new Error("Invalid email");
        if(!password) throw new Error("Invalid password");

        const invalidUserMessage = "Invalid user";

        const userExists = await prismaClient.user.findFirst({
            where: {
                email: email.toLocaleLowerCase()
            },
        });
        if(!userExists) throw new Error(invalidUserMessage);

        const passwordMatch = await compare(password, userExists.password);
        if(!passwordMatch) throw new Error(invalidUserMessage);

        const token = sign(
            {
                name: userExists.name,
                email: userExists.email
            },
            process.env.JWT_SECRET,
            {
                subject: userExists.id,
                expiresIn: "30d"
            }
        )

        return {
            id: userExists.id,
            name: userExists.name,
            email: userExists.email,
            token: token
        };
    }
}