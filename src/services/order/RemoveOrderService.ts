import { prismaClient } from "../../prisma";

export class RemoveOrderService {
    async execute(order_id: string) {
        const errorMessage = "Invalid order";

        if(!order_id) throw new Error(errorMessage)

        const orderExists = await prismaClient.order.findFirst({
            where: {
                id: order_id
            }
        });
        if(!orderExists) throw new Error(errorMessage);

        await prismaClient.order.delete({
            where: {
                id: order_id
            }
        });

        return {
            message: "Order has been deleted"
        }
    }
}