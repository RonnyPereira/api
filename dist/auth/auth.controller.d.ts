/// <reference types="multer" />
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { FileService } from 'src/file/file.service';
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    private readonly fileService;
    constructor(userService: UserService, authService: AuthService, fileService: FileService);
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
    uploadPhoto(user: any, photo: Express.Multer.File): Promise<{
        sucess: boolean;
    }>;
    uploadFiles(user: any, files: Express.Multer.File[]): Promise<Express.Multer.File[]>;
    uploadFilesFields(user: any, files: {
        photo: Express.Multer.File;
        documents: Express.Multer.File[];
    }): Promise<{
        photo: Express.Multer.File;
        documents: Express.Multer.File[];
    }>;
}
