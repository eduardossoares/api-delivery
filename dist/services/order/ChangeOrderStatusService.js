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
exports.ChangeOrderStatusService = void 0;
const prisma_1 = require("../../prisma");
class ChangeOrderStatusService {
    execute(order_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!order_id)
                throw new Error("Invalid order");
            try {
                const changeOrderStatus = yield prisma_1.prismaClient.order.update({
                    where: {
                        id: order_id
                    },
                    data: {
                        status: true
                    }
                });
                return {
                    message: "Order status has changed"
                };
            }
            catch (_a) {
                throw new Error("Error on change order status");
            }
        });
    }
}
exports.ChangeOrderStatusService = ChangeOrderStatusService;
