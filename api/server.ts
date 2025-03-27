import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";

import { router } from "../src/routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "./tmp")))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        res.status(400).json({
            error: err.message,
        });
        return;
    }

    res.status(500).json({
        status: "Error",
        message: "Internal Server Error" 
    });
    return;
});

app.listen(3333, () => {
    console.log("api is running on http://localhost:3333");
});