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
exports.CreateUserService = void 0;
const prisma_1 = require("../../prisma");
const bcryptjs_1 = require("bcryptjs");
class CreateUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, email, password }) {
            if (!name)
                throw new Error("Invalid name");
            if (!email)
                throw new Error("Invalid email");
            if (!password)
                throw new Error("Invalid password");
            const userAlreadyExists = yield prisma_1.prismaClient.user.findFirst({
                where: {
                    email: email.toLocaleLowerCase()
                }
            });
            if (userAlreadyExists)
                throw new Error("Email already registered");
            // Criptografando Senha
            const passwordHash = yield (0, bcryptjs_1.hash)(password, 8);
            const user = yield prisma_1.prismaClient.user.create({
                data: {
                    name: name,
                    email: email.toLocaleLowerCase(),
                    password: passwordHash
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    created_at: true,
                }
            });
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
