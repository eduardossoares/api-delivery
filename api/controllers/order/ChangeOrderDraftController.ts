import { Request, Response } from "express";
import { ChangeDraftOrderService } from "../../services/order/ChangeOrderDraftService";

export class ChangeDraftOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.params;
        const changeDraft = await new ChangeDraftOrderService().execute(order_id);
        res.json(changeDraft);
    }
}