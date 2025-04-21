import { Injectable, Signal, signal } from '@angular/core';
import { Task } from '../../models/Task';


export abstract class TasksService {

  abstract addTask(task: Task): void ;


   abstract getTasks() : Signal<Task[]>;
  abstract deleteTask(taskId: string): void ;
  abstract getTaskById(id: string): Signal<Task | undefined> ;
  abstract updateTask(updatedTask: Task): void ;

}
