
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import {IsNotEmpty, IsString, Max, Min} from 'class-validator'

@Entity()
export class  User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}
