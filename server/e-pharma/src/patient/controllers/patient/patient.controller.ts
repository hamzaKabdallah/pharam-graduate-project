import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { GetCurrentUserById } from 'src/utils';
import { JwtAuthGuard } from 'src/utils/guards/jwt-guard';

@Controller('patient')
export class PatientController {

    /**
     *
     */
    constructor() {
 
    }
    @UseGuards(JwtAuthGuard)
    @Get('test')
    test(@GetCurrentUserById() user) {
        console.log(user);
        
        return 'user';
    }
}
