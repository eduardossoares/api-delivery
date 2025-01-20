import { prismaClient } from "../../prisma";

export class ReadItemsFromOrderService {
    async execute(order_id) {
        const readItems = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true
            },
        });
        return readItems;
    }
}