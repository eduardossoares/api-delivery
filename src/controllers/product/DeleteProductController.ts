import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";

export class DeleteProductController {
    async handle(req: Request, res: Response) {
        const { product_id } = req.params;
        const product = await new DeleteProductService().execute(product_id);
        res.json(product);
    }
}