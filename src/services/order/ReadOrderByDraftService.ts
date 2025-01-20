import { prismaClient } from "../../prisma";

export class ReadOrderByStatusService {
    async execute() {
        const readOrder = await prismaClient.order.findMany({
            where: {
                draft: false
            }
        });
        return readOrder;
    }
}