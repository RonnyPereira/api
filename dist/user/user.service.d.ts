import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePatchUserDto } from './dto/upate-patch-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    create(data: CreateUserDto): Promise<UserEntity>;
    list(): Promise<UserEntity[]>;
    show(id: number): Promise<UserEntity>;
    update(id: number, { email, name, password, birthAt, role }: UpdatePutUserDto): Promise<import("typeorm").UpdateResult>;
    updatePartial(id: number, { email, name, password, birthAt, role }: UpdatePatchUserDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    exists(id: number): Promise<void>;
}
