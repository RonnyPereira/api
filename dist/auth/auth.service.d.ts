import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { UserEntity } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    private readonly mailer;
    private usersRepository;
    constructor(jwtService: JwtService, userService: UserService, mailer: MailerService, usersRepository: Repository<UserEntity>);
    creatToken(user: UserEntity): {
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
