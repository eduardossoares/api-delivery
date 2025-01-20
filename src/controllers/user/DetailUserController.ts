import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;
        const detailUser = await new DetailUserService().execute(user_id);

        res.json(detailUser);
    }
}