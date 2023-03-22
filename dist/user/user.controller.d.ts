import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePatchUserDto } from './dto/upate-patch-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDto): Promise<any>;
    list(): Promise<any>;
    show(id: number): Promise<any>;
    update(data: UpdatePutUserDto, id: number): Promise<any>;
    updatePartial(data: UpdatePatchUserDto, id: number): Promise<any>;
    delete(id: number): Promise<any>;
}
