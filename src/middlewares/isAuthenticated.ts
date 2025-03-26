import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;
    if(!authToken) {
        res.status(401).end();
        return 
    }
    const token = authToken.split(" ")[1];
    const secret = process.env.JWT_SECRET;

    if(!secret) throw new Error("JWT não configurado.");

    try {
        const { sub } = verify(token, secret) as Payload;
        req.user_id = sub;

        next();
    } catch {
        res.status(401).end();
    }
}