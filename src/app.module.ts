import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
  CacheModule,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthController } from './modules/auth/auth.controller';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(typeormConfig),
    AuthModule,
    CacheModule.register(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
