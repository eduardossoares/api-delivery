import { Request, Response } from "express";
import { EditCategoryService } from "../../services/category/EditCategoryService";

export class EditCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;

        const category = await new EditCategoryService().execute({id, name});

        res.json(category);
    }
}