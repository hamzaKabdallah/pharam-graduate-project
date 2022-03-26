import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class ValidationUserMiddleWare implements NestMiddleware{
    constructor(parameters) {
        
    }

    use(req: Request, res: Response, next: (error?: any) => void) {
        const { authorization } = req.headers;
        if (!authorization || authorization === '123') {
            throw new HttpException("you didn't have permission for enter this api", HttpStatus.FORBIDDEN);
        }
        next();
    }
}