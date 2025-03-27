import { prismaClient } from "../../prisma";

interface RemoveItemFromOrderRequest {
    order_id: string;
    item_id: string;
}

export class RemoveItemFromOrderService {
    async execute({order_id, item_id}: RemoveItemFromOrderRequest) {
        if(!order_id) throw new Error("Invalid order");
        if(!item_id) throw new Error("Invalid item");

        const itemAndOrderExists = await prismaClient.item.findFirst({
            where: {
                id: item_id,
                order_id: order_id
            }
        });
        if(!itemAndOrderExists) throw new Error("Order or Item does not exist");

        while(itemAndOrderExists.amount > 1) {
            const item = await prismaClient.item.update({
                where: {
                    id: item_id
                },
                data: {
                    amount: itemAndOrderExists.amount - 1
                },
                select: {
                    id: true,
                    amount: true,
                }
            });
            return item;
        }

        if(itemAndOrderExists.amount <= 1) {
            await prismaClient.item.delete({
                where: {
                    id: item_id
                }
            });

            return {
                message: "Item has been deleted"
            }
        }
        
    }
}