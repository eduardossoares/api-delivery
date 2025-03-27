import multer from "multer";

//import uploadConfig from "../config/multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export const uploadMiddleware = upload.single("file");

// export const uploadMiddleware = multer(uploadConfig.upload("/tmp")).single(
//  "file"
// );
