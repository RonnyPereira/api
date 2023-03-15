import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    login({ email, password }: AuthLoginDto): Promise<{
        acessToken: string;
    }>;
    register(body: AuthRegisterDto): Promise<{
        acessToken: string;
    }>;
    forget({ email }: AuthForgetDto): Promise<boolean>;
    reset({ password, token }: AuthResetDto): Promise<{
        acessToken: string;
    }>;
    me(user: any): Promise<{
        user: any;
    }>;
}
