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
exports.RemoveOrderService = void 0;
const prisma_1 = require("../../prisma");
class RemoveOrderService {
    execute(order_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorMessage = "Invalid order";
            if (!order_id)
                throw new Error(errorMessage);
            const orderExists = yield prisma_1.prismaClient.order.findFirst({
                where: {
                    id: order_id
                }
            });
            if (!orderExists)
                throw new Error(errorMessage);
            yield prisma_1.prismaClient.order.delete({
                where: {
                    id: order_id
                }
            });
            return {
                message: "Order has been deleted"
            };
        });
    }
}
exports.RemoveOrderService = RemoveOrderService;
