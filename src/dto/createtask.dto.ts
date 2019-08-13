import { TaskStatus } from '../tasks/tasks.enum';

export class CreateTask {
    title: string;
    description: string;
    status: TaskStatus;
}