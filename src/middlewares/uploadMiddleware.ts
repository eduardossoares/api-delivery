import multer from "multer";

import uploadConfig from "../config/multer";

export const uploadMiddleware = multer(uploadConfig.upload("/tmp")).single("file");