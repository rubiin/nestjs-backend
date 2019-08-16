import {IsNotEmpty, IsString, Matches, Max, Min} from "class-validator";

export class UserDto{
    id?: number;

    @IsNotEmpty()
    @IsString()
    @Max(20)
    @Min(4)
    username: string;


    @IsNotEmpty()
    @Max(20)
    @Min(8)
    @Matches(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]$"), {message: 'Password too weak'})
    password: string;
}