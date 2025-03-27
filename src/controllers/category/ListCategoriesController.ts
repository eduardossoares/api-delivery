import { Request, Response } from 'express';
import { ListCategoriesService } from '../../../src/services/category/ListCategoriesService';

export class ListCategoriesController {
    async handle(req: Request, res: Response) {
        const categories = await new ListCategoriesService().execute();
        res.json(categories)
    }
} 