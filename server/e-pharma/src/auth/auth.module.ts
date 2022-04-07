import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from 'src/typeorm/Patient';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { AuthPatientsService } from './services/patients/patients.service';
import { JwtStrategy } from './utils/LocalStrategy';
import { AuthDoctorService } from './services/doctor/doctor.service';
import { AuthPharmacistService } from './services/pharmacist/pharmacist.service';
import { AuthAdminService } from './services/admin/admin.service';
import { Doctor } from 'src/typeorm/Doctor';
import { Admin } from 'src/typeorm/Admin';
import { Pharmacist } from 'src/typeorm/Pharmacits';
import { ValidationUserMiddleWare } from './middlewares/login.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([
    Patients, Doctor, Admin, Pharmacist
  ]
  ),
  JwtModule.register({
    secret: 'klsdhjfkhwakjnsdkjhal'
  })
  ],
  controllers: [AuthController],
  providers: [
    ValidationUserMiddleWare,
    AuthPatientsService,
    AuthService,
    JwtStrategy,
    AuthDoctorService,
    AuthPharmacistService,
    AuthAdminService
  ],
})
export class AuthModule  {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(ValidationUserMiddleWare).forRoutes(AuthController)
  // }
}
