import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePatchUserDto } from './dto/upate-patch-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
export declare class UserService {
    constructor();
    create(data: CreateUserDto): Promise<any>;
    list(): Promise<any>;
    show(id: number): Promise<any>;
    update(id: number, { email, name, password, birthAt, role }: UpdatePutUserDto): Promise<any>;
    updatePartial(id: number, { email, name, password, birthAt, role }: UpdatePatchUserDto): Promise<any>;
    delete(id: number): Promise<any>;
    exists(id: number): Promise<void>;
}
