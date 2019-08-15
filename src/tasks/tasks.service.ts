import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks.enum';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { CreateTask } from 'src/dto/createtask.dto';
import {HTTP_RESPONSE} from '../utils/responsehelper.util';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private readonly taskRepository: TaskRepository) { }

    async getTaskById(id: number): Promise<Task> {
        const task = await this.taskRepository.findOne(id);

        if (!task) {
            throw new NotFoundException(`Task with id ${id} cannot be found`);
        }
        return task;

    }

    async createTask(createTask: CreateTask): Promise<Task> {
        const newTask = new Task();
        newTask.title = createTask.title;
        newTask.description = createTask.description;
        newTask.status = createTask.status;
        await newTask.save();
        return newTask;
    }

    async getTasks(): Promise<Task[]> {
        const tasks: Task[] = await this.taskRepository.find();
        return tasks;
    }

    async deleteTask(id: string): Promise<string> {
        const tasks = await this.taskRepository.delete(Number(id));
        if (tasks.affected === 0) {
            throw new NotFoundException('Task Not found');
        }
        return 'deleted';

    }

    async updateTask(id: string, createTask: CreateTask): Promise<Task> {
        const tasks = await this.taskRepository.findOne(id);
        if (!tasks) {
            throw new NotFoundException('Task doesn\'t exist');
        }
        await this.taskRepository;
        return tasks;
    }

}

