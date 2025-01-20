import { prismaClient } from "../../prisma";

export class ChangeOrderStatusService {
    async execute(order_id: string) {
        if(!order_id) throw new Error("Invalid order");

        try {
            const changeOrderStatus = await prismaClient.order.update({
                where: {
                    id: order_id
                },
                data: {
                    status: true
                }
            });
            return {
                message: "Order status has changed"
            }
        } catch {
            throw new Error("Error on change order status");
        }
    }
}