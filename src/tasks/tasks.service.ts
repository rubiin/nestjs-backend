import { Injectable, Logger } from '@nestjs/common';
import {  TaskStatus } from './tasks.enum';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository){}

}
