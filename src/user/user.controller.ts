import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ParamId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
import { AuthGuard } from 'src/guards/auth.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePatchUserDto } from './dto/upate-patch-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UserService } from './user.service';

@Roles(Role.User)
@UseGuards(AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Roles(Role.Admin, Role.User)
  @Post()
  async create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }
  @Roles(Role.Admin, Role.User)
  @Get()
  async list() {
    return this.userService.list();
  }
  @Roles(Role.Admin, Role.User)
  @Get(':id')
  async show(@ParamId() id: number) {
    return this.userService.show(id);
  }
  @Roles(Role.Admin, Role.User)
  @Put(':id')
  async update(@Body() data: UpdatePutUserDto, @ParamId() id: number) {
    return this.userService.update(id, data);
  }
  @Roles(Role.Admin, Role.User)
  @Patch(':id')
  async updatePartial(@Body() data: UpdatePatchUserDto, @ParamId() id: number) {
    return this.userService.updatePartial(id, data);
  }
  @Roles(Role.Admin, Role.User)
  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.userService.delete(id);
  }
}
