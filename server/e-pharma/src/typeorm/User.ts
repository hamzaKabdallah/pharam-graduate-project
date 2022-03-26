import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

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
    mobile: string;

    @Column({
        nullable: false,
    })
    password: string;

    @Column({
        nullable: false,
        default: false
    })
    isAdmin: boolean;

    @Column({
        nullable: false,
        default: false
    })
    isDoctor: boolean;

    @Column({
        nullable: false,
        default: false
    })
    isPharmacist: boolean;

    @Column({
        nullable: false,
        default: false
    })
    isUser: boolean;

}