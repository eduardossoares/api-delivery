import { prismaClient } from "../../prisma"

export class ListProductService {
    async execute(category_id: string) {
        const products = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
            }
        });
        return products;
    }
}