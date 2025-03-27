import { Request, Response } from "express";
import { EditProductService } from "../../../src/services/product/EditProductService";

export class EditProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description } = req.body;
        const { product_id } = req.params;
        
        const product = await new EditProductService().execute({name, price, description, product_id});
        res.json(product);
    }
}