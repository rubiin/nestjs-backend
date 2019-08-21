import { TaskStatus } from '../modules/tasks/tasks.enum';
import { IsNotEmpty } from 'class-validator';

export class CreateTask {
    public id?: number;
    @IsNotEmpty()
    public title: string;
    public description: string;
    public status: TaskStatus;
}