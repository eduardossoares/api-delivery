import { prismaClient } from "../../prisma";

interface CreateOrderRequest {
    name: string;
    phone: string;
    street_adress: string;
    number_adress: string;
    reference_adress?: string;
    note: string;
    payment_type: string;
}

export class CreateOrderService {
    async execute({name, phone, street_adress, number_adress, reference_adress, note, payment_type}: CreateOrderRequest) {
        if(!name) throw new Error("Invalid name");
        if(!phone) throw new Error("Invalid phone");
        if(!street_adress) throw new Error("Invalid street adress");
        if(!number_adress) throw new Error("Invalid number adress");
        if(!payment_type) throw new Error("Invalid payment type");

        const order = await prismaClient.order.create({
            data: {
                name: name,
                phone: phone,
                street_adress: street_adress,
                number_adress: number_adress,
                reference_adress: reference_adress,
                note: note,
                payment_type: payment_type
            },
            select: {
                name: true,
                phone: true,
                street_adress: true,
                number_adress: true,
                reference_adress: true,
                note: true,
                payment_type: true,
                created_at: true,
            }
        });

        return order;
    }
}