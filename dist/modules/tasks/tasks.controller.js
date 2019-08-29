"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const createtask_dto_1 = require("@dto/createtask.dto");
const taskFilter_dto_1 = require("@dto/taskFilter.dto");
const helperFunctions_utils_1 = require("@utils/helperFunctions.utils");
const tasks_service_1 = require("./tasks.service");
const passport_1 = require("@nestjs/passport");
const getUser_decorator_1 = require("@modules/auth/getUser.decorator");
const user_entity_1 = require("@modules/auth/user.entity");
let TasksController = class TasksController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getTaskById(id) {
        return this.taskService.getTaskById(id);
    }
    getTask(taskFilterDto, user) {
        if (helperFunctions_utils_1.isObjectEmpty(taskFilterDto)) {
            return this.taskService.getTasks();
        }
        else {
            return this.taskService.getFilteredTasks(taskFilterDto.search, taskFilterDto.taskStatus, user);
        }
    }
    deleteTask(params) {
        return this.taskService.deleteTask(params.id);
    }
    updateTask(params, createTaskDto) {
        return this.taskService.updateTask(Number(params.id), createTaskDto);
    }
    CreateTask(createTaskDto, user) {
        return this.taskService.createTask(createTaskDto, user);
    }
};
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTaskById", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __param(1, getUser_decorator_1.getUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [taskFilter_dto_1.TaskFilter, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTask", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "deleteTask", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createtask_dto_1.CreateTask]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateTask", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new common_1.ValidationPipe({ validationError: { target: false } })),
    __param(0, common_1.Body()),
    __param(1, getUser_decorator_1.getUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createtask_dto_1.CreateTask,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "CreateTask", null);
TasksController = __decorate([
    common_1.Controller('tasks'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map