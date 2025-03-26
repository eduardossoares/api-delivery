import { Request, Response } from "express";
import { RemoveItemFromOrderService } from "../../services/order/RemoveItemFromOrderService";

export class RemoveItemFromOrderController {
    async handle(req: Request, res: Response) {
        const { order_id, item_id } = req.params;
        const item = await new RemoveItemFromOrderService().execute({order_id, item_id});
        res.json(item);
    }
}