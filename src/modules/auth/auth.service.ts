import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from '../../dto/userCreate.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { TypeOrmErrorHandler } from '../../utils/helperFunctions.utils';
@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository) { }

    async createUser(userDto: UserDto): Promise<void> {
        const user = new User();
        user.username = userDto.username;
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(userDto.password, user.salt);

        try {
            await user.save();
        }
        catch (error) {
            TypeOrmErrorHandler(error);
        }
    }

    async getAllUsers(): Promise<User[]> {

        return this.userRepository.find();

    }

    async validatePassword(userDto: UserDto): Promise<string> {
        const user = await this.userRepository.findOne({ where: { username: userDto.username } });
        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (await user.validatePassword(userDto.password)) {
            return 'Successfully validated';
        } else {
            throw new UnauthorizedException('Invalid credentials');
        }


    }
}
