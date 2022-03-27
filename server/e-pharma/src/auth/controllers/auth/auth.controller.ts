import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dtos/registerDto';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { LoginDto } from 'src/classes/loginDto';

@Controller('auth')
export class AuthController {
    /**
     *
     */
    constructor(private authService: AuthService) {

    }

    @Post('create')
    @UsePipes(ValidationPipe)
    create(@Body() createRegDto: RegisterDto) {
        return this.authService.createUser(createRegDto);
    }

    @Post('login')
    @UsePipes(ValidationPipe)
    login(@Body() loginDto: LoginDto) {
        
    }
}
