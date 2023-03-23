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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entity/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(data) {
        if (await this.usersRepository.exist({
            where: {
                email: data.email,
            },
        })) {
            throw new common_1.BadRequestException('Este e-mail já esta sendo usado');
        }
        const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password, salt);
        const user = this.usersRepository.create(data);
        return this.usersRepository.save(user);
    }
    async list() {
        return this.usersRepository.find();
    }
    async show(id) {
        await this.exists(id);
        return this.usersRepository.findOneBy({
            id,
        });
    }
    async update(id, { email, name, password, birthAt, role }) {
        await this.exists(id);
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);
        return this.usersRepository.update(id, {
            email,
            name,
            password,
            birthAt: birthAt ? new Date(birthAt) : null,
            role,
        });
    }
    async updatePartial(id, { email, name, password, birthAt, role }) {
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
            const salt = await bcrypt.genSalt();
            data.password = await bcrypt.hash(password, salt);
        }
        if (role) {
            data.role = role;
        }
        return this.usersRepository.update(id, data);
    }
    async delete(id) {
        await this.exists(id);
        return this.usersRepository.delete(id);
    }
    async exists(id) {
        if (!(await this.usersRepository.exist({
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
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map