import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import fs from "fs";
import path from "path";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    if (!req.file) throw new Error("Invalid image file");

    const { filename: banner } = req.file;

    try {
      const product = await new CreateProductService().execute({
        name,
        price,
        description,
        category_id,
        banner,
      });

      res.json(product);

    } catch (error) {
      // Deletar o arquivo em caso de erro
      if (req.file) {
        const filePath = path.resolve(__dirname, "..", "..", "..", "tmp", req.file.filename);
        fs.unlinkSync(filePath); // Deleta o arquivo
      }

      res.status(400).json({ message: error.message });
    }
  }
}
