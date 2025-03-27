import { prismaClient } from "../../prisma";

export class ListCategoriesService {
    async execute() {
        const categories = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
            }
        });
        return categories;
    }
}