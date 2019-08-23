import { Body, Controller, Get, Post, UsePipes, ValidationPipe, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserDto } from '../../dto/userCreate.dto';
import { UserLoginDto } from '../../dto/userLogin.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { multerConfig } from 'src/utils/helperFunctions.utils';


@Controller('auth')
export class AuthController {
    constructor(private  readonly authService: AuthService){}

    @Post('signup')
    @UsePipes(new ValidationPipe({ validationError: { target: false } }))
    public createUser(@Body()userDto: UserDto): Promise<void>{
    return this.authService.createUser(userDto);
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    public getUsers(): Promise<User[]>{
        return this.authService.getAllUsers();
    }

    @Post('login')
    @UsePipes(new ValidationPipe({ validationError: { target: false } }))
    public loginUser(@Body() userLogin: UserLoginDto): Promise<{ message: string, accesstoken: string }> {
        return this.authService.validatePassword(userLogin);
    }


    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
            storage: diskStorage(multerConfig)
        })
    )
    uploadFile(@UploadedFile() file) {
        console.log(file);
    }

}
