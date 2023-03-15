import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly prisma;
    private readonly userService;
    constructor(jwtService: JwtService, prisma: PrismaService, userService: UserService);
    creatToken(user: User): {
        acessToken: string;
    };
    checkToken(token: string): any;
    isValidToken(token: string): boolean;
    login(email: string, password: string): Promise<{
        acessToken: string;
    }>;
    forget(email: string): Promise<boolean>;
    reset(password: string, token: string): Promise<{
        acessToken: string;
    }>;
    register(data: AuthRegisterDto): Promise<{
        acessToken: string;
    }>;
}
