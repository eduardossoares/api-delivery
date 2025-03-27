import { prismaClient } from "../../prisma";

export class ChangeDraftOrderService {
    async execute(order_id: string) {
        if(!order_id) throw new Error("Invalid order");

        try {
            const changeOrder = await prismaClient.order.update({
                where: {
                    id: order_id
                },
                data: {
                    draft: false
                },
            });
            return {
                message: "Draft has changed"
            };
        } catch {
            throw new Error("Error on change draft");
        }
    }
}