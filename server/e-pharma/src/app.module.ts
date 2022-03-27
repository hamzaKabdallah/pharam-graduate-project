import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { PharmacistModule } from './pharmacist/pharmacist.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import entities from './typeorm';
import { PatientModule } from './patient/patients.module';

const imports = [
  DoctorModule,
  PharmacistModule,
  AdminModule,
  PatientModule,
  AuthModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'hamza',
    password: 'hamza123',
    database: 'pharmacy_db',
    entities: [...entities],
    synchronize: true
  })
]
@Module({
  imports: [ ...imports],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
