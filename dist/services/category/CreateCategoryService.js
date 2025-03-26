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
exports.CreateCategoryService = void 0;
const prisma_1 = require("../../prisma");
class CreateCategoryService {
    execute(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name)
                throw new Error("Invalid name");
            const categoryExists = yield prisma_1.prismaClient.category.findFirst({
                where: {
                    name: name
                }
            });
            if (categoryExists)
                throw new Error("Category name already registered");
            const newCategory = yield prisma_1.prismaClient.category.create({
                data: {
                    name: name
                },
                select: {
                    id: true,
                    name: true,
                    created_at: true,
                }
            });
            return newCategory;
        });
    }
}
exports.CreateCategoryService = CreateCategoryService;
