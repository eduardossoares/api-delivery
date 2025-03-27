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
exports.CreateProductService = void 0;
const prisma_1 = require("../../prisma");
class CreateProductService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, price, description, banner, category_id }) {
            if (!name)
                throw new Error("Invalid name");
            if (!price)
                throw new Error("Invalid price");
            if (!description)
                throw new Error("Invalid description");
            if (!category_id)
                throw new Error("Invalid category");
            const productExists = yield prisma_1.prismaClient.product.findFirst({
                where: {
                    name: name
                }
            });
            if (productExists)
                throw new Error("Product already registered");
            const product = yield prisma_1.prismaClient.product.create({
                data: {
                    name: name,
                    price: price,
                    description: description,
                    banner: banner,
                    category_id: category_id,
                },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    description: true,
                    category_id: true,
                    created_at: true,
                    banner: true,
                }
            });
            return product;
        });
    }
}
exports.CreateProductService = CreateProductService;
