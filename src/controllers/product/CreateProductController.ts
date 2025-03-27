import { Request, Response } from "express";
import { CreateProductService } from "../../../src/services/product/CreateProductService";

import { v2 as cloudinary } from "cloudinary";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    if (!req.file) throw new Error("Invalid image file");
    const file = req.file;

    try {
      const uploadPromise = new Promise<string>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { resource_type: "image" },
            (
              error: UploadApiErrorResponse | undefined,
              result: UploadApiResponse | undefined
            ) => {
              if (error) {
                reject(error);
              } else {
                resolve(result!.secure_url); // Non-null assertion já que result é garantido se não houver erro
              }
            }
          )
          .end(file.buffer);
      });

      const banner = await uploadPromise;

      const product = await new CreateProductService().execute({
        name,
        price,
        description,
        category_id,
        banner,
      });

      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Erro ao processar upload ou criação!",
      });
    }
  }
}
