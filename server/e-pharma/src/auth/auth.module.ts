import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from 'src/typeorm/Patient';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patients])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
