"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("../config/multer"));
exports.uploadMiddleware = (0, multer_1.default)(multer_2.default.upload("./tmp")).single("file");
