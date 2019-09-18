import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
  CacheModule,
  Param,
  ClassSerializerInterceptor,
  CacheInterceptor,
} from '@nestjs/common';
import { UserDto } from '@common/dto/userCreate.dto';
import { UserLoginDto } from '@common/dto/userLogin.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {minioClient, multerConfig} from '@utils/helperFunctions.utils';

@Controller('auth')
@UseInterceptors(CacheInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(new ValidationPipe({ validationError: { target: false } }))
  public createUser(@Body() userDto: UserDto): Promise<void> {
    return this.authService.createUser(userDto);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  public getUsers(): Promise<User[]> {
    return this.authService.getAllUsers();
  }

  @Get(':id')
  public test(@Param() param) {
    return param.id;
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ validationError: { target: false } }))
  public loginUser(
    @Body() userLogin: UserLoginDto,
  ): Promise<{ message: string; accesstoken: string }> {
    return this.authService.validatePassword(userLogin);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage(multerConfig),
    }),
  )
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }


  @Post('uploadWithMinio')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFileWithMinio(@UploadedFile() file) {
      console.log(file.buffer);
     await minioClient.putObject('rubin', 'hello', file.buffer);
  }



}
