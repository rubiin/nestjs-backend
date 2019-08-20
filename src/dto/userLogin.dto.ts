import { IsNotEmpty, IsString, Matches, Max, MaxLength, Min, MinLength } from 'class-validator';

export class UserLoginDto {

    @IsNotEmpty()
    public username: string;


    @IsNotEmpty()
     public password: string;
}