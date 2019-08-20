import { TaskStatus } from '../modules/tasks/tasks.enum';

export class TaskFilter {
    public taskStatus: TaskStatus;
    public search: string;
}