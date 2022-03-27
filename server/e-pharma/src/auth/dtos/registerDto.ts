import { IsEmail, IsNotEmpty } from "class-validator";
import { Gender } from "src/enums/genders.enum";

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    phone_number: string;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    gender: Gender.FEMALE | Gender.MALE;
}