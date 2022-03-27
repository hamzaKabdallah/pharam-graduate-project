import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor {

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

    @Column({
        nullable: false
    })
    Specify: string;
}
