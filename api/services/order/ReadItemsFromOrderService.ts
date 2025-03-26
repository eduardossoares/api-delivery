import { prismaClient } from "../../prisma";

export class ReadItemsFromOrderService {
    async execute(order_id: string) {
        const readItems = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            },
        });
        return readItems;
    }
}