import { CreateUserService } from "../../../src/services/user/CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createUser = await new CreateUserService().execute({
            name,
            email,
            password
        });

        res.json(createUser);
        return;
    }
}