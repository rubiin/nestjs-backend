import { Injectable, Logger } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import * as uuid from 'uuid/v1';
import { CreateTask } from '../dto/createtask.dto';

@Injectable()
export class TasksService {

    private readonly tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTask) {

        const { title, description , status} = createTaskDto;
        const task = {
            id: uuid(),
            title,
            description,
            status
        };
        this.tasks.push(task);
        return task;
    }

    getTaskById(id: string): Task {
        const task = this.tasks.find(el => el.id === id);
        return task;
    }

    deleteTaskById(id: string): string{
        const taskId = this.tasks.findIndex(el => el.id === id);
        Logger.warn(taskId);
        this.tasks.splice(taskId, 1);
        return 'deleted';
    }

    searchTask(status: TaskStatus, title: string): Task[] {
    return this.tasks.filter((el) => el.status === status && title === el.title);

    }
}
