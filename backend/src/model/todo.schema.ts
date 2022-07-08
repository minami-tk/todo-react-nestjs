import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose';
import { User } from './user.schema';
export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({required: true})
  title: string;
  @Prop({required: true})
  description: string;
  @Prop({required: true})
  done: boolean;
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User"})
  createdBy: User;
  @Prop({default: Date.now()})
  createDate: Date;
}
export const TodoSchema = SchemaFactory.createForClass(Todo)