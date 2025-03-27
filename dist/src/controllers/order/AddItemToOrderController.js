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
exports.AddItemToOrderController = void 0;
const AddItemToOrderService_1 = require("../../../src/services/order/AddItemToOrderService");
class AddItemToOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_id } = req.body;
            const { order_id } = req.params;
            const item = yield new AddItemToOrderService_1.AddItemToOrderService().execute({ order_id, product_id });
            res.json(item);
        });
    }
}
exports.AddItemToOrderController = AddItemToOrderController;
