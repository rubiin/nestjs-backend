import { CreateTask } from '@dto/createtask.dto';
import { TaskFilter } from '@dto/taskFilter.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { User } from '@modules/auth/user.entity';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    getTaskById(id: number): Promise<Task>;
    getTask(taskFilterDto: TaskFilter, user: any): Promise<Task[]>;
    deleteTask(params: any): Promise<string>;
    updateTask(params: any, createTaskDto: CreateTask): Promise<Task>;
    CreateTask(createTaskDto: CreateTask, user: User): Promise<Task>;
}
