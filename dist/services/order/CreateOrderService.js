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
exports.CreateOrderService = void 0;
const prisma_1 = require("../../prisma");
class CreateOrderService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, phone, street_adress, number_adress, reference_adress, note, payment_type }) {
            if (!name)
                throw new Error("Invalid name");
            if (!phone)
                throw new Error("Invalid phone");
            if (!street_adress)
                throw new Error("Invalid street adress");
            if (!number_adress)
                throw new Error("Invalid number adress");
            if (!payment_type)
                throw new Error("Invalid payment type");
            const order = yield prisma_1.prismaClient.order.create({
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
                    id: true,
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
        });
    }
}
exports.CreateOrderService = CreateOrderService;
