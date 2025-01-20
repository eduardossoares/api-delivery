import { prismaClient } from "../../prisma"

interface AddItemToOrderRequest {
    order_id: string;
    product_id: string;
}

export class AddItemToOrderService {
    async execute({ order_id, product_id}: AddItemToOrderRequest) {
        if(!order_id) throw new Error("Invalid order");
        if(!product_id) throw new Error("Invalid product");

        const orderExists = await prismaClient.order.findUnique({
            where: {
                id: order_id
            }
        });
        if(!orderExists) throw new Error("Order does not exist");

        const productExists = await prismaClient.product.findUnique({
            where: {
                id: product_id
            }
        });
        if(!productExists) throw new Error("Product does not exist");

        const alreadyItemOnTheCart = await prismaClient.item.findFirst({
            where: {
                product_id: product_id,
                order_id: order_id,
            }
        });
        if(alreadyItemOnTheCart) {
            try {
                const editItemAmount = await prismaClient.item.update({
                    where: {
                        id: alreadyItemOnTheCart.id
                    },
                    data: {
                        amount: alreadyItemOnTheCart.amount + 1,
                    }
                });
                return editItemAmount;
            } catch {
                throw new Error("Error on (item on the cart)");
            }
        }

        const item = await prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
            }
        });

        return item;
    }
}