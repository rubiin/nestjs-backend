import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserDto } from '@common/dto/userCreate.dto';
import { TypeOrmErrorHandler } from '@utils/helperFunctions.utils';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  public async createUser(userDto: UserDto): Promise<void> {
    const user = new User();
    user.username = userDto.username;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(userDto.password, user.salt);

    try {
      await user.save();
    } catch (error) {
      TypeOrmErrorHandler(error);
    }
  }

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async validatePassword(
    userDto: UserDto,
  ): Promise<{ message: string; accesstoken: string }> {
    const user = await this.userRepository.findOne({
      where: { username: userDto.username },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (await user.validatePassword(userDto.password)) {
      const payload = { username: userDto.username };
      const accesstoken = await this.jwtService.sign(payload);
      return { message: 'Successfully signed', accesstoken };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
