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
exports.ReadItemsFromOrderController = void 0;
const ReadItemsFromOrderService_1 = require("../../services/order/ReadItemsFromOrderService");
class ReadItemsFromOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id } = req.params;
            const readItems = yield new ReadItemsFromOrderService_1.ReadItemsFromOrderService().execute(order_id);
            res.json(readItems);
        });
    }
}
exports.ReadItemsFromOrderController = ReadItemsFromOrderController;
