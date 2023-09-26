import { MiddlewareConsumer, Module,NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user.entity';
import { UserMiddleware } from './auth/middleware/user.middleware';
import { Post } from './auth/post.entity';
import { Comment } from './auth/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_demo',
      entities: [User,Post,Comment],
      synchronize: true,
      // logging:['error','query','migration']
    }),
    
    
    
    
    AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes({ path: 'auth/all_user', method: RequestMethod.GET },{ path: 'auth/update_user', method: RequestMethod.PUT });
  }

}
