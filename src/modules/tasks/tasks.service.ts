import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTask } from 'src/dto/createtask.dto';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { TaskStatus } from './tasks.enum';
import { User } from '../auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private readonly taskRepository: TaskRepository,
  ) {}

  public async getTaskById(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException(`Task with id ${id} cannot be found`);
    }
    return task;
  }

  public async createTask(createTask: CreateTask, user: User): Promise<Task> {
    const newTask = new Task();
    newTask.title = createTask.title;
    newTask.description = createTask.description;
    newTask.status = createTask.status;
    newTask.user = user;
    await newTask.save();
    return newTask;
  }

  public async getTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  public async getFilteredTasks(
    title: string,
    status: TaskStatus,
    user: User,
  ): Promise<Task[]> {
    const query = this.taskRepository.createQueryBuilder('task');

    query.where('task.userId = :userid', { userid: user.id });

    if (title) {
      query.andWhere('task.title LIKE :name', { name: `${title}%` });
    }

    if (status) {
      query.andWhere('task.status LIKE :status', { status });
    }

    const tasks = await query.getMany();

    return tasks;
  }

  public async deleteTask(id: string): Promise<string> {
    const tasks = await this.taskRepository.delete(Number(id));
    if (tasks.affected === 0) {
      throw new NotFoundException('Task Not found');
    }
    return 'deleted';
  }

  public async updateTask(id: number, createTask: CreateTask): Promise<Task> {
    // let tasks =  await this.getTaskById(Number(id));
    // tasks.description = createTask.description;
    // tasks.status = createTask.status;
    // tasks.title = createTask.title;
    // return await this.taskRepository.save(tasks);

    await this.taskRepository.update(id, createTask);
    return this.getTaskById(Number(id));
  }
}
