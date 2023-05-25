import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task';

@Controller('tasks')
export class TaskController {
  constructor(
    private taskService: TaskService
  ) { }

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getByID(@Param('id') id: string): Promise<Task> {
    return this.taskService.getByID(id);
  }

  @Post()
  async criar(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, @Body() task: Task) {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  async deletar(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
