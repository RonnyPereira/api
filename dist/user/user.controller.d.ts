import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePatchUserDto } from './dto/upate-patch-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDto): Promise<import("./entity/user.entity").UserEntity>;
    list(): Promise<import("./entity/user.entity").UserEntity[]>;
    show(id: number): Promise<import("./entity/user.entity").UserEntity>;
    update(data: UpdatePutUserDto, id: number): Promise<import("typeorm").UpdateResult>;
    updatePartial(data: UpdatePatchUserDto, id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
