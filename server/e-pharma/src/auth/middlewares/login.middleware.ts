import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import { Observable, Subject, take } from "rxjs";
import { UserTypes } from "src/enums/user-types.enum";
import { AuthDoctorService } from "../services/doctor/doctor.service";
import { AuthPatientsService } from "../services/patients/patients.service";
import { AuthPharmacistService } from "../services/pharmacist/pharmacist.service";

@Injectable()
export class ValidationUserMiddleWare implements NestMiddleware{
    constructor(
        
        ) {
        
    }

    use(req: Request, res: Response, next: (error?: any) => void) {

        console.log('middleware', req.query);
        const userType = req.query.userType;

        let setUserType;
        switch (userType) {
            case UserTypes.ADMIN: setUserType = UserTypes.ADMIN; break;
            case UserTypes.DOCTOR: setUserType = UserTypes.DOCTOR; break;
            case UserTypes.PATIENT: setUserType = UserTypes.PATIENT; break;
            case UserTypes.PHARMACIST: setUserType = UserTypes.PHARMACIST; break;

        }

        // const { authorization } = req.headers;
        // if (!authorization || authorization === '123') {
        //     throw new HttpException("you didn't have permission for enter this api", HttpStatus.FORBIDDEN);
        // }
        next();
    }
}