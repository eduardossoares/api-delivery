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
exports.RemoveItemFromOrderService = void 0;
const prisma_1 = require("../../prisma");
class RemoveItemFromOrderService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ order_id, item_id }) {
            if (!order_id)
                throw new Error("Invalid order");
            if (!item_id)
                throw new Error("Invalid item");
            const itemAndOrderExists = yield prisma_1.prismaClient.item.findFirst({
                where: {
                    id: item_id,
                    order_id: order_id
                }
            });
            if (!itemAndOrderExists)
                throw new Error("Order or Item does not exist");
            while (itemAndOrderExists.amount > 1) {
                const item = yield prisma_1.prismaClient.item.update({
                    where: {
                        id: item_id
                    },
                    data: {
                        amount: itemAndOrderExists.amount - 1
                    },
                    select: {
                        id: true,
                        amount: true,
                    }
                });
                return item;
            }
            if (itemAndOrderExists.amount <= 1) {
                yield prisma_1.prismaClient.item.delete({
                    where: {
                        id: item_id
                    }
                });
                return {
                    message: "Item has been deleted"
                };
            }
        });
    }
}
exports.RemoveItemFromOrderService = RemoveItemFromOrderService;
