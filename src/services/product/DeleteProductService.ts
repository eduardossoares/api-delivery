import { prismaClient } from "../../prisma";

export class DeleteProductService {
    async execute(product_id: string) {
        const errorMessage = "Invalid product";

        if(!product_id) throw new Error(errorMessage);

        const productExists = await prismaClient.product.findFirst({
            where: {
                id: product_id
            }
        });
        if(!productExists) throw new Error(errorMessage);

        await prismaClient.product.delete({
            where: {
                id: product_id
            }
        });
        return {
            message: "Product has been deleted"
        }
    }
}