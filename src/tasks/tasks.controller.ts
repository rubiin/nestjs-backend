import { Controller, Get, Post, Body, Delete, Param, Logger, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

}
