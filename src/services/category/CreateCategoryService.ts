import { prismaClient } from "../../prisma";

export class CreateCategoryService {
    async execute(name: string) {
        if(!name) throw new Error("Invalid name");

        const categoryExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        });
        if(categoryExists) throw new Error("Category name already registered");

        const newCategory = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true,
                created_at: true,
            }
        })

        return newCategory;
    }
}