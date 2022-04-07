import { IUserAuthData } from "src/interfaces/login.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pharmacist implements IUserAuthData{

    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    _id: number;

    @Column({
        name: 'email',
        nullable: true,
    })
    email: string;

    @Column({
        nullable: false,
    })
    username: string;

    @Column({
        nullable: true,
    })
    phone_number: string;

    @Column({
        nullable: false,
    })
    password: string;

}