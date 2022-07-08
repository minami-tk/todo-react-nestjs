import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './utils/constants';
import { join } from 'path/posix';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { Todo, TodoSchema } from './model/todo.schema';
import { User, UserSchema } from './model/user.schema';
import { isAuthenticated } from './middleware/auth.middleware'
import { ConfigModule } from '@nestjs/config';
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: '2h' },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
    ConfigModule.forRoot({ envFilePath: '.env'}),
  ],
  controllers: [AppController, UserController, TodoController],
  providers: [AppService, UserService, TodoService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      .forRoutes(TodoController);
  }
}
