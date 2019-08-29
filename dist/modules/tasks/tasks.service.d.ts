import { CreateTask } from '@dto/createtask.dto';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { TaskStatus } from './tasks.enum';
import { User } from '@modules/auth/user.entity';
export declare class TasksService {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    getTaskById(id: number): Promise<Task>;
    createTask(createTask: CreateTask, user: User): Promise<Task>;
    getTasks(): Promise<Task[]>;
    getFilteredTasks(title: string, status: TaskStatus, user: User): Promise<Task[]>;
    deleteTask(id: string): Promise<string>;
    updateTask(id: number, createTask: CreateTask): Promise<Task>;
}
