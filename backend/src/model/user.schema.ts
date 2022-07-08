import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({required: true})
  name: string;
  @Prop({required: true, unique: true})
  email: string;
  @Prop({required: true})
  password: string;
  @Prop({default: Date.now()})
  createDate: Date;
}
export const UserSchema = SchemaFactory.createForClass(User)