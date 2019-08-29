import { TaskStatus } from '@modules/tasks/tasks.enum';
export declare class CreateTask {
    id?: number;
    title: string;
    description: string;
    status: TaskStatus;
}
