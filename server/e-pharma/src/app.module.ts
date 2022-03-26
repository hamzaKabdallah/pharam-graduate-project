import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { PharmacistModule } from './pharmacist/pharmacist.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import entities from './typeorm';

const imports = [
  DoctorModule,
  PharmacistModule,
  AdminModule,
  UserModule,
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
