import { Request, Response, NextFunction } from "express";

export const isUploadAllowed = (req: Request, res: Response, next: NextFunction) => {
    const { name, price, description, category_id } = req.body;
    console.log(name, price, description)
} 