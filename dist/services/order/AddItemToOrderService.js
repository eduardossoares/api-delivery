"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemToOrderService = void 0;
const prisma_1 = require("../../prisma");
class AddItemToOrderService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ order_id, product_id }) {
            if (!order_id)
                throw new Error("Invalid order");
            if (!product_id)
                throw new Error("Invalid product");
            const orderExists = yield prisma_1.prismaClient.order.findUnique({
                where: {
                    id: order_id
                }
            });
            if (!orderExists)
                throw new Error("Order does not exist");
            const productExists = yield prisma_1.prismaClient.product.findUnique({
                where: {
                    id: product_id
                }
            });
            if (!productExists)
                throw new Error("Product does not exist");
            const alreadyItemOnTheCart = yield prisma_1.prismaClient.item.findFirst({
                where: {
                    product_id: product_id,
                    order_id: order_id,
                }
            });
            if (alreadyItemOnTheCart) {
                try {
                    const editItemAmount = yield prisma_1.prismaClient.item.update({
                        where: {
                            id: alreadyItemOnTheCart.id
                        },
                        data: {
                            amount: alreadyItemOnTheCart.amount + 1,
                        }
                    });
                    return editItemAmount;
                }
                catch (_b) {
                    throw new Error("Error on (item on the cart)");
                }
            }
            const item = yield prisma_1.prismaClient.item.create({
                data: {
                    order_id: order_id,
                    product_id: product_id,
                }
            });
            return item;
        });
    }
}
exports.AddItemToOrderService = AddItemToOrderService;
