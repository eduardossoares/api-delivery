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
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../../src/services/product/CreateProductService");
const cloudinary_1 = require("./../../config/cloudinary");
class CreateProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, description, category_id } = req.body;
            if (!req.file)
                throw new Error("Invalid image file");
            const file = req.file;
            try {
                const uploadPromise = new Promise((resolve, reject) => {
                    cloudinary_1.cloudinaryConfig.uploader
                        .upload_stream({ resource_type: "image" }, (error, result) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (!resolve || !result)
                                return;
                            resolve(result.secure_url); // URL pública da Cloudinary
                        }
                    })
                        .end(file.buffer);
                });
                const banner = yield uploadPromise;
                const product = yield new CreateProductService_1.CreateProductService().execute({
                    name,
                    price,
                    description,
                    category_id,
                    banner,
                });
                res.json(product);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
