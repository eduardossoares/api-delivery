import { Request, Response } from "express";
import { ReadOrderByStatusService } from "../../services/order/ReadOrderByDraftService";

export class ReadOrderByStatusController {
    async handle(req: Request, res: Response) {
        const readOrder = await new ReadOrderByStatusService().execute();
        res.json(readOrder);
    }
}