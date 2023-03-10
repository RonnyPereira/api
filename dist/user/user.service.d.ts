import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePatchUserDto } from './dto/upate-patch-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<import(".prisma/client").User>;
    list(): Promise<import(".prisma/client").User[]>;
    show(id: number): Promise<import(".prisma/client").User>;
    update(id: number, { email, name, password, birthAt }: UpdatePutUserDto): Promise<import(".prisma/client").User>;
    updatePartial(id: number, { email, name, password, birthAt }: UpdatePatchUserDto): Promise<import(".prisma/client").User>;
    delete(id: number): Promise<import(".prisma/client").User>;
    exists(id: number): Promise<void>;
}
