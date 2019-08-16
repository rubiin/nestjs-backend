import {TaskStatus} from "../modules/tasks/tasks.enum";

export class TaskFilter {
    taskStatus: TaskStatus;
    search: string;
}