import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pharmacist as PharmacistEntity } from 'src/typeorm/Pharmacits';
import { Repository } from 'typeorm';

@Injectable()
export class AuthPharmacistService {
    constructor(
        @InjectRepository(PharmacistEntity) private PharmacistRepo: Repository<PharmacistEntity>) {
    }

    getUserByEmail(email: string): Promise<PharmacistEntity> {
        console.log('AuthPharmacistService');

        const doctor = this.PharmacistRepo.findOne({ email });
        return doctor;
    }
}
