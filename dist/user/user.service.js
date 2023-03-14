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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.user.create({
            data,
        });
    }
    async list() {
        return this.prisma.user.findMany();
    }
    async show(id) {
        await this.exists(id);
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }
    async update(id, { email, name, password, birthAt }) {
        await this.exists(id);
        return this.prisma.user.update({
            data: {
                email,
                name,
                password,
                birthAt: birthAt ? new Date(birthAt) : null,
            },
            where: {
                id,
            },
        });
    }
    async updatePartial(id, { email, name, password, birthAt }) {
        await this.exists(id);
        const data = {};
        if (birthAt) {
            data.birthAt = new Date(birthAt);
        }
        if (email) {
            data.email = email;
        }
        if (name) {
            data.name = name;
        }
        if (password) {
            data.password = password;
        }
        return this.prisma.user.update({
            data,
            where: {
                id,
            },
        });
    }
    async delete(id) {
        await this.exists(id);
        return this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
    async exists(id) {
        if (!(await this.prisma.user.count({
            where: {
                id,
            },
        }))) {
            throw new common_1.NotFoundException(`Usuário ${id} não existe`);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map