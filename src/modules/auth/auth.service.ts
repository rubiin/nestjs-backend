import { Injectable } from '@nestjs/common';
import {UserRepository} from "./user.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {UserDto} from "../../dto/userCreate.dto";
import {User} from "./user.entity";
import * as bcrypt from 'bcrypt';
import {validate} from "class-validator";
@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository){}

   async createUser(userDto: UserDto): Promise<void>{
        let user = new User();
        user.username = userDto.username;
       user.password = await bcrypt.hash(user.password, 10);
        await user.save();
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }
}
