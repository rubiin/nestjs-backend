import { UserDto } from '@dto/userCreate.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    createUser(userDto: UserDto): Promise<void>;
    getAllUsers(): Promise<User[]>;
    validatePassword(userDto: UserDto): Promise<{
        message: string;
        accesstoken: string;
    }>;
}
