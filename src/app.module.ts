import { TaskController } from './tasks/shared/task.controller';
import { TasksModule } from './tasks/tasks.module';
import { TaskService } from './tasks/shared/task.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './tasks/schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/todo'),
    TasksModule,],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule { }
