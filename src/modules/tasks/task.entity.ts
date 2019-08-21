
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TaskStatus } from './tasks.enum';
import { User } from '../auth/user.entity';
import { IsNotEmpty, IsString, MinLength, MaxLength, IsIn } from 'class-validator';

@Entity()
export class  Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;


    @Column()
    public description: string;

    @Column()
    public status: TaskStatus;

    @ManyToOne(type => User, user => user.tasks, {eager: false})
    user: User;
}
