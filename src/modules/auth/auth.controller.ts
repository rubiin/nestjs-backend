import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserDto} from "../../dto/userCreate.dto";
import {User} from "./user.entity";

@Controller('auth')
export class AuthController {
    constructor(private  readonly authService :AuthService){}

    @Post('signup')
    @UsePipes(new ValidationPipe({ validationError: { target: false } }))
    createUser(@Body()userDto: UserDto): Promise<void>{
    return this.authService.createUser(userDto);
    }

    @Get()
    getUsers(): Promise<User[]>{
        return this.authService.getAllUsers();
    }



}
