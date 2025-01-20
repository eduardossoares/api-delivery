import { prismaClient } from "../../prisma";

export class DeleteCategoryService {
    async execute(id: string) {
        try {
            await prismaClient.category.delete({
                where: {
                    id: id
                }
            });

            return {
                message: "Category has been deleted"
            }
        } catch {
            throw new Error("Invalid category!");
        }
    }
}