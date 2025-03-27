import { Request, Response } from "express";
import { ListProductService } from "../../../src/services/product/ListProductService";

export class ListProductController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;
        const product = await new ListProductService().execute(category_id);
        res.json(product);
    }
}