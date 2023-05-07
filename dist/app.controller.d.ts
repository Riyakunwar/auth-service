import { CreateUserDto } from './create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './login-user.dto';
export declare class AppController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<{
        user: import("./user.entity").User;
    }>;
    login(loginUserDto: LoginUserDto): Promise<string>;
}
