import { Request, Response } from "express";
import { CreateProductService } from "../../../src/services/product/CreateProductService";

import { cloudinaryConfig } from "./../../config/cloudinary";

import fs from "fs";
import path from "path";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    if (!req.file) throw new Error("Invalid image file");

    const file = req.file;

    try {
      const uploadPromise = new Promise<string>((resolve, reject) => {
        cloudinaryConfig.uploader
          .upload_stream(
            { resource_type: "image" },
            (
              error: UploadApiErrorResponse | undefined,
              result: UploadApiResponse | undefined
            ) => {
              if (error) {
                reject(error);
              } else {
                if (!resolve || !result) return;
                resolve(result.secure_url); // URL pública da Cloudinary
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
    }
  }
}
