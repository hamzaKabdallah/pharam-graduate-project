import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/dtos/registerDto';
import { Patients as PatientsEntity } from 'src/typeorm/Patient';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(PatientsEntity)
    private userRepo: Repository<PatientsEntity>) {

    }

    async createUser(user: RegisterDto) {
        const prevUser = await this.userRepo.find({
            email: user.email
        });
        
        if (prevUser.length > 0) {
            throw new HttpException('user already exist', HttpStatus.CREATED);
        }

        const saltOrRounds = 10;
        const hash = await bcrypt.hash(user.password, saltOrRounds);
        user.password = hash;

        return this.userRepo.save(user)
            .then(value => {
                delete value.password;

                return value;
            }
            ).catch(error => { throw new HttpException('error while save user', HttpStatus.INTERNAL_SERVER_ERROR) })
    }
}
