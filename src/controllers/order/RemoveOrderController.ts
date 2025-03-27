import { Request, Response } from "express";
import { RemoveOrderService } from "../../../src/services/order/RemoveOrderService";

export class RemoveOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.params;
        const order = await new RemoveOrderService().execute(order_id);
        res.json(order);
    }
}