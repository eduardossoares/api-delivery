import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const category = await new CreateCategoryService().execute(name);
        res.json(category);
    }
} 