import { Controller, Get, Post, Body, Delete, Param, Logger, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTask } from '../dto/createtask.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

    // @Get()
    // getTasks(): Task[] {
    //     return this.taskService.getAllTasks();
    // }
    @Post()
    createTask(@Body() createTaskDto: CreateTask): Task {

        return this.taskService.createTask(createTaskDto);

    }

    @Get('/:id')
    getTaskById(@Param() params): Task {
        Logger.error(params.id);
        return this.taskService.getTaskById(params.id);
    }

    @Delete()
    deleteTaskById(@Body('id') id: string) {
        return this.taskService.deleteTaskById(id);
    }

    @Get()
    searchTask(@Query() query): Task[]{
        Logger.warn('herere', query.title, query.status);
        return this.taskService.searchTask(query.status, query.title);
    }

}
