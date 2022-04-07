import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto {
    // @IsEmail()
    // @IsNotEmpty()
    // email: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}