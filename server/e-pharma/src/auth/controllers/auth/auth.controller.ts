import { Body, Controller, Get, Post, Session, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUserFromJWT } from 'src/auth/decorators/get-user.decorators';
import { RegisterDto } from 'src/auth/dtos/registerDto';
import { AuthPatientsService } from 'src/auth/services/patients/patients.service';
import { LoginDto } from 'src/classes/loginDto';
import { IUserAuthData } from 'src/interfaces/login.interface';

@Controller('auth')
export class AuthController {
    /**
     *
     */
    constructor(private authPatientsService: AuthPatientsService) {

    }

    @Post('create')
    @UsePipes(ValidationPipe)
    create(@Body() createRegDto: RegisterDto) {
        return this.authPatientsService.createUser(createRegDto);
    }

    @Post('login')
    @UsePipes(ValidationPipe)
    login(@Body() loginDto: LoginDto) {
        return this.authPatientsService.doLogin(loginDto);
    }
}
