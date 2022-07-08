import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { User } from "../model/user.schema";
import { UserService } from "../service/user.service";
import { JwtService } from '@nestjs/jwt'
import { Request, Response } from 'express';

@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  @Post('/signup')
  async Signup(@Res() response, @Body() user: User) {
    const newUserInfo = await this.userService.signup(user, this.jwtService)
    return response.status(HttpStatus.CREATED).json(newUserInfo)
  }

  @Post('/signin')
  async SingIn(@Res() response, @Body() user: User) {
    const token = await this.userService.signin(user, this.jwtService)
    return response.status(HttpStatus.OK).json(token)
  }
}