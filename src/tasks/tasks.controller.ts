import { Controller, Get, Post, Body, Delete, Param, Logger, Query, ParseIntPipe, HttpCode, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTask } from '../dto/createtask.dto';
import { TaskFilter } from '../dto/taskFilter.dto';
import {isObjectEmpty} from '../utils/helperFunctions.utils';


@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {

        return this.taskService.getTaskById(id);

    }

    @Get()
    getTask(@Query() taskFilterDto: TaskFilter): Promise<Task[]> {

        if (isObjectEmpty(taskFilterDto)) {
            return this.taskService.getTasks();
        }
        else {
            return this.taskService.getFilteredTasks(taskFilterDto.search, taskFilterDto.taskStatus);
        }


    }

    @Delete('/:id')
    deleteTask(@Param() params) {
        return this.taskService.deleteTask(params.id);

    }

    @Patch('/:id')
    updateTask(@Param() params, @Body() createTaskDto: CreateTask): Promise<Task> {

        return this.taskService.updateTask(Number(params.id), createTaskDto);

    }

    @Post()
    CreateTask(@Body() createTaskDto: CreateTask): Promise<Task> {
        return this.taskService.createTask(createTaskDto);

    }
}
