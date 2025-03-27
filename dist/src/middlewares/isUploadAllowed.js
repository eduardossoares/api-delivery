"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUploadAllowed = void 0;
const isUploadAllowed = (req, res, next) => {
    const { name, price, description, category_id } = req.body;
    console.log(name, price, description);
};
exports.isUploadAllowed = isUploadAllowed;
