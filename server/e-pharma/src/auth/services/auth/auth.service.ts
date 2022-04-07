import { Injectable } from '@nestjs/common';
import { AuthPatientsService } from '../patients/patients.service';
import * as bcrypt from 'bcrypt'
import { AuthDoctorService } from '../doctor/doctor.service';
import { AuthPharmacistService } from '../pharmacist/pharmacist.service';
import { AuthAdminService } from '../admin/admin.service';
import { UserTypes } from 'src/enums/user-types.enum';

@Injectable()
export class AuthService {
    /**
     *
     */
    constructor(
        private authDoctorService: AuthDoctorService,
        private authPatientsService: AuthPatientsService,
        private authPharmacistService: AuthPharmacistService,
        private authAdminService: AuthAdminService
    ) { }

    async validateUser(email: string, password: string, userType: string) {

        let userDB;
        switch (userType) {
            case UserTypes.ADMIN:  userDB = await this.authAdminService.getUserByEmail(email); break;
            case UserTypes.DOCTOR:  userDB = await this.authDoctorService.getUserByEmail(email); break;
            case UserTypes.PATIENT: userDB = await this.authPatientsService.getUserByEmail(email); break;
            case UserTypes.PHARMACIST:  userDB = await this.authPharmacistService.getUserByEmail(email); break;

        }

        // const userDB = await this.authPatientsService.getUserByEmail(email);
        if (!userDB) {
            return null;
        }

        const bcryptPass = await bcrypt.compare(password, userDB.password);
        if (userDB && bcryptPass) {
            return userDB;
        }

        return null;
    }
}

