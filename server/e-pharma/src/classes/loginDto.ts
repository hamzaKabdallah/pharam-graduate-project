import { IsEmail, IsNotEmpty, IsEnum } from "class-validator";
import { UserTypes } from "src/enums/user-types.enum";

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    // not required for API
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEnum(UserTypes)
    userType: UserTypes.ADMIN | UserTypes.DOCTOR | UserTypes.PATIENT | UserTypes.PHARMACIST
}