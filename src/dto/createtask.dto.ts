import { TaskStatus } from '../tasks/tasks.model';

export class CreateTask {
    title: string;
    description: string;
    status: TaskStatus;
}