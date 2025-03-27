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
exports.CreateOrderController = void 0;
const CreateOrderService_1 = require("../../../src/services/order/CreateOrderService");
class CreateOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, phone, street_adress, number_adress, reference_adress, note, payment_type } = req.body;
            const order = yield new CreateOrderService_1.CreateOrderService().execute({
                name,
                phone,
                street_adress,
                number_adress,
                reference_adress,
                note,
                payment_type
            });
            res.json(order);
        });
    }
}
exports.CreateOrderController = CreateOrderController;
