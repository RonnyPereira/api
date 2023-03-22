import {
  forwardRef,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserIdCheckMiddlware } from 'src/middlewares/user-id-check.middleware';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [forwardRef(() => AuthModule, TypeOrmModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserIdCheckMiddlware).forRoutes({
      path: 'users/:id',
      method: RequestMethod.ALL,
    });
  }
}
