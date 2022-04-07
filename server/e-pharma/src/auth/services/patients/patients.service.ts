import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/dtos/registerDto';
import { Patients as PatientsEntity } from 'src/typeorm/Patient';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IUserAuthData } from 'src/interfaces/login.interface';
import { UserTypes } from 'src/enums/user-types.enum';
import { AuthAdminService } from '../admin/admin.service';
import { AuthDoctorService } from '../doctor/doctor.service';
import { AuthPharmacistService } from '../pharmacist/pharmacist.service';

@Injectable()
export class AuthPatientsService {
  constructor(
    @InjectRepository(PatientsEntity)
    private userRepo: Repository<PatientsEntity>,
    private jwtService: JwtService,
    private authAdminService: AuthAdminService,
    private authDoctorService: AuthDoctorService,
    private authPharmacistService: AuthPharmacistService,
  ) { }

  async createUser(user: RegisterDto) {
    const prevUser = await this.getUserByEmail(user.email);

    if (prevUser) {
      throw new HttpException('user already exist', HttpStatus.CREATED);
    }

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(user.password, saltOrRounds);
    user.password = hash;

    return this.userRepo
      .save(user)
      .then((value) => {
        delete value.password;

        return value;
      })
      .catch((error) => {
        throw new HttpException(
          'error while save user',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }

  async doLogin(user: IUserAuthData) {

    let prevUser;
    if (user.userType === UserTypes.PATIENT) {
      console.log('patient if', user);
      
      prevUser = await this.getUserByEmail(user.email);
    } else {
      console.log('patient if', user);
      prevUser = await this.handleGetUserByType(user.userType, user.email);
    }


    if (!prevUser) {
      throw new HttpException('user not found', HttpStatus.UNAUTHORIZED);
    }

    const password = await bcrypt.compare(user.password, prevUser.password)
    if (!password) throw new UnauthorizedException();

    const { _id, email } = prevUser;
    return this.signUser(_id, email, user.userType);
  }

  signUser(userId, email, userType): string {
    return this.jwtService.sign({
      sub: userId,
      userType,
      email
    })
  }

  getUserByEmail(email: string): Promise<PatientsEntity> {
    const user = this.userRepo.findOne({ email });
    return user;
  }

  getUserByUsername(username: string): Promise<PatientsEntity> {
    const user = this.userRepo.findOne({ username });
    return user;
  }

  handleGetUserByType(type: string, email: string) {
    switch (type) {
      case UserTypes.ADMIN: return this.authAdminService.getUserByEmail(email); break;
      case UserTypes.DOCTOR: return this.authDoctorService.getUserByEmail(email); break;
      case UserTypes.PHARMACIST: return this.authPharmacistService.getUserByEmail(email); break;
    }
  }
}
