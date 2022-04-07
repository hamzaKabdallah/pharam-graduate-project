import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin as AdminEntity } from 'src/typeorm/Admin';
import { Repository } from 'typeorm';

@Injectable()
export class AuthAdminService {
    constructor(
        @InjectRepository(AdminEntity) private adminRepo: Repository<AdminEntity>
    ) {}

    getUserByEmail(email: string): Promise<AdminEntity> {
        console.log('admin');
        
        const user = this.adminRepo.findOne({ email });
        return user;
    }
}
