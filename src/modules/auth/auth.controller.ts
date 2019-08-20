import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto } from '../../dto/userCreate.dto';
import { UserLoginDto } from '../../dto/userLogin.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private  readonly authService: AuthService){}

    @Post('signup')
    @UsePipes(new ValidationPipe({ validationError: { target: false } }))
    public createUser(@Body()userDto: UserDto): Promise<void>{
    return this.authService.createUser(userDto);
    }

    @Get()
    public getUsers(): Promise<User[]>{
        return this.authService.getAllUsers();
    }

    @Post('login')
    @UsePipes(new ValidationPipe({ validationError: { target: false } }))
    public loginUser(@Body() userLogin: UserLoginDto): Promise<string> {
        return this.authService.validatePassword(userLogin);
    }



}
