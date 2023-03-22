"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const user_id_check_middleware_1 = require("../middlewares/user-id-check.middleware");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
let UserModule = class UserModule {
    configure(consumer) {
        consumer.apply(user_id_check_middleware_1.UserIdCheckMiddlware).forRoutes({
            path: 'users/:id',
            method: common_1.RequestMethod.ALL,
        });
    }
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => auth_module_1.AuthModule, typeorm_1.TypeOrmModule)],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map