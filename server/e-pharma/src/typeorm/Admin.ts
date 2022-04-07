import { IUserAuthData } from "src/interfaces/login.interface";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Admin implements IUserAuthData {
   
    @PrimaryGeneratedColumn()
    _id: number;

    @Column({
        nullable: false
    })
    email: string;

    @Column({
        nullable: false
    })
    username: string;

    @Column({
        nullable: false
    })
    password: string;

}