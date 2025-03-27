"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const isAuthenticated = (req, res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.status(401).end();
        return;
    }
    const token = authToken.split(" ")[1];
    const secret = process.env.JWT_SECRET;
    if (!secret)
        throw new Error("JWT não configurado.");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, secret);
        req.user_id = sub;
        next();
    }
    catch (_a) {
        res.status(401).end();
    }
};
exports.isAuthenticated = isAuthenticated;
