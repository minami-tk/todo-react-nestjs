import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UseInterceptors, UploadedFiles, Put, Req, Res, Query } from "@nestjs/common";
import { Todo } from "../model/todo.schema"
import { TodoService } from "../service/todo.service";

@Controller('/api/v1/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllByUser(@Res() response, @Req() request) {
    const todos =  await this.todoService.getAllByUser(request.user._id)
    return response.status(HttpStatus.OK).json(todos)
  }

  @Post()
  async create(@Res() response, @Req() request, @Body() todo) {
    const createTodo = await this.todoService.create(todo, request.user._id)
    return response.status(HttpStatus.OK).json(createTodo)
  }

  @Put('/status/:id')
  async update(@Res() response, @Param('id') id) {
    const updateTodo = await this.todoService.updateStatus(id)
    return response.status(HttpStatus.OK).json(updateTodo)
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    await this.todoService.delete(id);
    return response.status(HttpStatus.OK)
  }
}