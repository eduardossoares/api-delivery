import { prismaClient } from "../../prisma";

interface EditCategoryRequest {
    id: string;
    name: string;
}

export class EditCategoryService {
    async execute({id, name}: EditCategoryRequest) {
        if(!id) throw new Error("Invalid id");
        if(!name) throw new Error("Invalid name");

        try {
            await prismaClient.category.update({
                where: {
                    id: id,
                },
                data: {
                    name: name,
                },
            });
            return {
                message: "Category has been changed"
            };
        } catch {
            throw new Error("Invalid category!");
        }
    }
}