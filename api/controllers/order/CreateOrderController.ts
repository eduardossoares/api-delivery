import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

export class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { 
            name,
            phone,
            street_adress,
            number_adress,
            reference_adress,
            note,
            payment_type
        } = req.body;

        const order = await new CreateOrderService().execute({
            name,
            phone, 
            street_adress, 
            number_adress, 
            reference_adress, 
            note,
            payment_type
        });

        res.json(order);
    }
}