import { Document } from "mongoose";

export interface UserInterface extends Document {
    readonly id: string
    readonly username: string
    readonly email: string
    readonly password: string
}