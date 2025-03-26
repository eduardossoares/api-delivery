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
exports.DeleteCategoryService = void 0;
const prisma_1 = require("../../prisma");
class DeleteCategoryService {
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.prismaClient.category.delete({
                    where: {
                        id: id
                    }
                });
                return {
                    message: "Category has been deleted"
                };
            }
            catch (_a) {
                throw new Error("Invalid category!");
            }
        });
    }
}
exports.DeleteCategoryService = DeleteCategoryService;
