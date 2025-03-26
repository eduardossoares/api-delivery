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
exports.DeleteProductService = void 0;
const prisma_1 = require("../../prisma");
class DeleteProductService {
    execute(product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorMessage = "Invalid product";
            if (!product_id)
                throw new Error(errorMessage);
            const productExists = yield prisma_1.prismaClient.product.findFirst({
                where: {
                    id: product_id
                }
            });
            if (!productExists)
                throw new Error(errorMessage);
            yield prisma_1.prismaClient.product.delete({
                where: {
                    id: product_id
                }
            });
            return {
                message: "Product has been deleted"
            };
        });
    }
}
exports.DeleteProductService = DeleteProductService;
