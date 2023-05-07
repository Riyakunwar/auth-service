import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { LoginUserDto } from './login-user.dto';
import { Model } from "mongoose";
export declare class AuthService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<string>;
}
