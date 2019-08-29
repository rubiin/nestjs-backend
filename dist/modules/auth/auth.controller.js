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
const userCreate_dto_1 = require("@dto/userCreate.dto");
const userLogin_dto_1 = require("@dto/userLogin.dto");
const auth_service_1 = require("./auth.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const helperFunctions_utils_1 = require("@utils/helperFunctions.utils");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    createUser(userDto) {
        return this.authService.createUser(userDto);
    }
    getUsers() {
        return this.authService.getAllUsers();
    }
    test(param) {
        return param.id;
    }
    loginUser(userLogin) {
        return this.authService.validatePassword(userLogin);
    }
    uploadFile(file) {
        console.log(file);
    }
};
__decorate([
    common_1.Post('signup'),
    common_1.UsePipes(new common_1.ValidationPipe({ validationError: { target: false } })),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userCreate_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    common_1.Get(),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUsers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "test", null);
__decorate([
    common_1.Post('login'),
    common_1.UsePipes(new common_1.ValidationPipe({ validationError: { target: false } })),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userLogin_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage(helperFunctions_utils_1.multerConfig),
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "uploadFile", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    common_1.UseInterceptors(common_1.CacheInterceptor),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map