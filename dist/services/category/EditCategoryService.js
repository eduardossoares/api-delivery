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
exports.EditCategoryService = void 0;
const prisma_1 = require("../../prisma");
class EditCategoryService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, name }) {
            if (!id)
                throw new Error("Invalid id");
            if (!name)
                throw new Error("Invalid name");
            try {
                yield prisma_1.prismaClient.category.update({
                    where: {
                        id: id,
                    },
                    data: {
                        name: name,
                    },
                });
                return {
                    message: "Category has been changed"
                };
            }
            catch (_b) {
                throw new Error("Invalid category!");
            }
        });
    }
}
exports.EditCategoryService = EditCategoryService;
