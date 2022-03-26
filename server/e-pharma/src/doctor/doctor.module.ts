import { Module } from '@nestjs/common';
import { DoctorController } from './controllers/doctor/doctor.controller';

@Module({
  controllers: [DoctorController]
})
export class DoctorModule {}
