import {TaskStatus} from "../tasks/tasks.enum";

export class TaskFilter {
    taskStatus: TaskStatus;
    search: string;
}