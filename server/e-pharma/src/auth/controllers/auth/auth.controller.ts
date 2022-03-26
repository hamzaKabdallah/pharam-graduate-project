import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto } from 'src/classes/loginDto';
import { CreateUserRegDto } from 'src/user/dtos/create-user-reg.dto';

@Controller('auth')
export class AuthController {
    /**
     *
     */
    constructor() {

    }

    @Post('reg')
    @UsePipes(ValidationPipe)
    register(@Body() createRegAdminDto: CreateUserRegDto) {

    }

    @Post('login')
    @UsePipes(ValidationPipe)
    login(@Body() loginDto: LoginDto) {
        
    }
}
