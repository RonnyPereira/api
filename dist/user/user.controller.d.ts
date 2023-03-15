import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePatchUserDto } from './dto/upate-patch-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDto): Promise<import(".prisma/client").User>;
    list(): Promise<import(".prisma/client").User[]>;
    show(id: number): Promise<import(".prisma/client").User>;
    update(data: UpdatePutUserDto, id: number): Promise<import(".prisma/client").User>;
    updatePartial(data: UpdatePatchUserDto, id: number): Promise<import(".prisma/client").User>;
    delete(id: number): Promise<import(".prisma/client").User>;
}
