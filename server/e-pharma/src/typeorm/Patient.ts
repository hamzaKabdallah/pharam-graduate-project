import { Gender } from "src/enums/genders.enum";
import { IUserAuthData } from "src/interfaces/login.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patients implements IUserAuthData {

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

    @Column({
        nullable: false,
    })
    street: string;

    @Column({
        nullable: false,
    })
    country: string;


    @Column({
        type: 'char'
    })
    gender: Gender.FEMALE | Gender.MALE;
}