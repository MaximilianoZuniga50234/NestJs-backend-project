import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [TasksModule, MongooseModule.forRoot("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0")],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
