import { Request, Response } from "express";
import { AddItemToOrderService } from "../../../src/services/order/AddItemToOrderService";

export class AddItemToOrderController {
    async handle(req: Request, res:Response) {
        const { product_id } = req.body;
        const { order_id } = req.params;

        const item = await new AddItemToOrderService().execute({ order_id, product_id});
        res.json(item);
    }
}