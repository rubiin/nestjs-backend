import { TaskStatus } from '../tasks/tasks.enum';

export class CreateTask {
    id?: number;
    title: string;
    description: string;
    status: TaskStatus;
}