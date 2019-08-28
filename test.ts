import { classToPlain , Transform, plainToClass } from "class-transformer";
class User {
    @Transform(value => value.toUpperCase(), { toClassOnly: true })
    id: string;
}

const test= {id: 'skhdsj'};

console.log(plainToClass(User, test));