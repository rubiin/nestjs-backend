import { Body, Controller, Delete, Get, HttpCode, Logger, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateTask } from '../../dto/createtask.dto';
import { TaskFilter } from '../../dto/taskFilter.dto';
import { isObjectEmpty } from '../../utils/helperFunctions.utils';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

    @Get('/:id')
    public getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {

        return this.taskService.getTaskById(id);

    }

    @Get()
    public getTask(@Query() taskFilterDto: TaskFilter): Promise<Task[]> {

        if (isObjectEmpty(taskFilterDto)) {
            return this.taskService.getTasks();
        }
        else {
            return this.taskService.getFilteredTasks(taskFilterDto.search, taskFilterDto.taskStatus);
        }


    }

    @Delete('/:id')
    public deleteTask(@Param() params) {
        return this.taskService.deleteTask(params.id);

    }

    @Patch('/:id')
    public updateTask(@Param() params, @Body() createTaskDto: CreateTask): Promise<Task> {

        return this.taskService.updateTask(Number(params.id), createTaskDto);

    }

    @Post()
    public CreateTask(@Body() createTaskDto: CreateTask): Promise<Task> {
        return this.taskService.createTask(createTaskDto);

    }
}
