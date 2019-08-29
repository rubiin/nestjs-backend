import { UserDto } from '@dto/userCreate.dto';
import { UserLoginDto } from '@dto/userLogin.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(userDto: UserDto): Promise<void>;
    getUsers(): Promise<User[]>;
    test(param: any): any;
    loginUser(userLogin: UserLoginDto): Promise<{
        message: string;
        accesstoken: string;
    }>;
    uploadFile(file: any): void;
}
