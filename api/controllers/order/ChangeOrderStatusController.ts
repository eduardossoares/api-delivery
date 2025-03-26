import { Request, Response } from "express";
import { ChangeOrderStatusService } from './../../services/order/ChangeOrderStatusService';

export class ChangeOrderStatusController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.params;
        const changeOrderStatus = await new ChangeOrderStatusService().execute(order_id);
        res.json(changeOrderStatus); 
    }
}