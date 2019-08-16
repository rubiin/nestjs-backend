import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(typeormConfig), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
