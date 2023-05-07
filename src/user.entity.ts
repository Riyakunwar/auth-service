
 import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  
  id: number;

  @Prop({ unique: true })
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop({ default: true })
  isActive: boolean;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
  export const DemoSchema = SchemaFactory.createForClass(User);

