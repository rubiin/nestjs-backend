import { BaseEntity } from 'typeorm';
import { TaskStatus } from './tasks.enum';
import { User } from '@modules/auth/user.entity';
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
