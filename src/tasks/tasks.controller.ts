import { Controller, Get, Post, Body, Delete, Param, Logger, Query, ParseIntPipe, HttpCode, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTask } from '../dto/createtask.dto';
import { HTTP_RESPONSE } from '../utils/responsehelper.util';


@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {

        return this.taskService.getTaskById(id);

    }

    @Get()
    getTask(): Promise<Task[]> {

        return this.taskService.getTasks();

    }

    @Delete('/:id')
     deleteTask(@Param() params) {
       return this.taskService.deleteTask(params.id);

    }

    @Patch(':/id')
    updateTask(@Param() params, createTaskDto: CreateTask): Promise<Task> {

        return this.taskService.updateTask(params.id, createTaskDto);

    }

    @Post()
    CreateTask(@Body() createTaskDto: CreateTask): Promise<Task> {
        const task = this.taskService.createTask(createTaskDto);
        return task;
    }
}
