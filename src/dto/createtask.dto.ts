import { TaskStatus } from '../modules/tasks/tasks.enum';

export class CreateTask {
    public id?: number;
    public title: string;
    public description: string;
    public status: TaskStatus;
}