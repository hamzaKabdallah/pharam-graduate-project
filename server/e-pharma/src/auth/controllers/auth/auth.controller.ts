import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto } from 'src/classes/loginDto';
import { CreatePatientsRegDto } from 'src/patient/dtos/create-patients-reg.dto';

@Controller('auth')
export class AuthController {
    /**
     *
     */
    constructor() {

    }

    @Post('reg')
    @UsePipes(ValidationPipe)
    register(@Body() createRegAdminDto: CreatePatientsRegDto) {

    }

    @Post('login')
    @UsePipes(ValidationPipe)
    login(@Body() loginDto: LoginDto) {
        
    }
}
