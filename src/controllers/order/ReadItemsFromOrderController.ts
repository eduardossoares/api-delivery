import { Request, Response } from "express";
import { ReadItemsFromOrderService } from "../../services/order/ReadItemsFromOrderService";

export class ReadItemsFromOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.params;
        const readItems = await new ReadItemsFromOrderService().execute(order_id);
        res.json(readItems);
    }
}