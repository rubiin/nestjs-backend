import { IsNotEmpty, IsString, Matches, Max, Min, MinLength, MaxLength } from 'class-validator';

export class UserLoginDto {

    @IsNotEmpty()
    username: string;


    @IsNotEmpty()
     password: string;
}