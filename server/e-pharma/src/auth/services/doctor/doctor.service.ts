import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor as DoctorEntity } from 'src/typeorm/Doctor';
import { Repository } from 'typeorm';

@Injectable()
export class AuthDoctorService {
    /**
     *
     */
    constructor(
        @InjectRepository(DoctorEntity) private doctorRepo: Repository<DoctorEntity>,
    ) {

    }

    getUserByEmail(email: string): Promise<DoctorEntity> {
        console.log('doctor');

        const doctor = this.doctorRepo.findOne({ email });
        return doctor;
    }

    getUserByUsername(username: string): Promise<DoctorEntity> {
        const doctor = this.doctorRepo.findOne({ username });
        return doctor;
    }
}
