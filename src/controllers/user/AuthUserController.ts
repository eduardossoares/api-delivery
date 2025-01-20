import { AuthUserService } from "../../services/user/AuthUserService";
import { Request, Response } from "express";

export class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authUser = await new AuthUserService().execute({
            email,
            password
        });

        res.json(authUser);
        return;
    }
}