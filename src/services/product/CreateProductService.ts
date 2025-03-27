import { prismaClient } from "../../prisma";

interface CreateProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

export class CreateProductService {
    async execute({name, price, description, banner, category_id}: CreateProductRequest) {
        if(!name) throw new Error("Invalid name");
        if(!price) throw new Error("Invalid price");
        if(!description) throw new Error("Invalid description");
        if(!category_id) throw new Error("Invalid category");

        const productExists = await prismaClient.product.findFirst({
            where: {
                name: name
            }
        });
        if(productExists) throw new Error("Product already registered");

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            },
            select: {
                id: true,
                name: true,
                price: true, 
                description: true,
                category_id: true,
                created_at: true,
                banner: true,
            }
        });

        return product;
    }
}