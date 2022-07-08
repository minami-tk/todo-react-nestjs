import {
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo, TodoDocument } from "../model/todo.schema";

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>){}

  async getAllByUser(userId: string): Promise<Todo[]> {
    return this.todoModel.find({ createdBy: userId }).exec();
  }

  async create(todo, userId: string): Promise<Todo> {
    const { title, description } = todo
    const createTodo = new this.todoModel({
      title: title,
      description: description,
      done: false,
      createdBy: userId,
    })
    return createTodo.save()
  }

  async updateStatus(id: string): Promise<Todo> {
    const updateTodo = await this.todoModel.findById(id)
    updateTodo.done =!updateTodo.done
    updateTodo.save()
    return updateTodo
  }

  async delete(id: string): Promise<void> {
    return await this.todoModel.findByIdAndDelete(id)
  }
}