import { prismaClient } from "../../prisma"

interface EditProductRequest {
    name: string;
    price: string;
    description: string;
    product_id: string;
}

export class EditProductService {
    async execute({ name, price, description, product_id }: EditProductRequest) {
        if(!product_id) throw new Error("Invalid product");
        if(!name) throw new Error("Invalid name");
        if(!price) throw new Error("Invalid price");
        if(!description) throw new Error("Invalid description");

        await prismaClient.product.update({
            where: {
                id: product_id,
            },
            data: {
                name: name,
                price: price,
                description: description
            },
        });

        return {
            message: "Product has been changed"
        };
    }
}