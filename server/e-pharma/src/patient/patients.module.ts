import { Module } from '@nestjs/common';
import { PatientController } from './controllers/patient/patient.controller';

@Module({
  controllers: [PatientController]
})
export class PatientModule {}
