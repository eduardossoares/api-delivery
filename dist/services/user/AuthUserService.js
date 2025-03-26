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
exports.AuthUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = require("../../prisma");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            if (!email)
                throw new Error("Invalid email");
            if (!password)
                throw new Error("Invalid password");
            const invalidUserMessage = "Invalid user";
            const userExists = yield prisma_1.prismaClient.user.findFirst({
                where: {
                    email: email.toLocaleLowerCase()
                },
            });
            if (!userExists)
                throw new Error(invalidUserMessage);
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, userExists.password);
            if (!passwordMatch)
                throw new Error(invalidUserMessage);
            const token = (0, jsonwebtoken_1.sign)({
                name: userExists.name,
                email: userExists.email
            }, process.env.JWT_SECRET, {
                subject: userExists.id,
                expiresIn: "30d"
            });
            return {
                id: userExists.id,
                name: userExists.name,
                email: userExists.email,
                token: token
            };
        });
    }
}
exports.AuthUserService = AuthUserService;
