import { Module } from '@nestjs/common';
import { PharmacistController } from './controllers/pharmacist/pharmacist.controller';

@Module({
  controllers: [PharmacistController]
})
export class PharmacistModule {}
