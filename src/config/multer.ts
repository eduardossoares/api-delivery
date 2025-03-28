import crypto from "crypto";
import multer from "multer";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: folder,
        filename: async (req, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;
          return callback(null, fileName);
        },
      }),
    };
  },
};
