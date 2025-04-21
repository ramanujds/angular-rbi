import { Injectable, Signal, signal } from '@angular/core';
import { Task } from '../../models/Task';
import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceLocal extends TasksService {


  private tasksList = signal<Task[]>([
    { id: '1', title: 'Angular Day 1', description: 'Angular Basics', completed: false },
    { id: '2', title: 'Angular Day 2', description: 'Angular Components', completed: false },
    { id: '3', title: 'Angular Day 3', description: 'Angular Services', completed: false },
    { id: '4', title: 'Angular Day 4', description: 'Angular Routing', completed: false },
    { id: '5', title: 'Angular Day 5', description: 'Angular Forms', completed: false },
    { id: '6', title: 'Angular Day 6', description: 'Angular HTTP Client', completed: false },
    { id: '7', title: 'Angular Day 7', description: 'Angular Observables', completed: false },
    { id: '8', title: 'Angular Day 8', description: 'Angular Directives', completed: false },
    { id: '9', title: 'Angular Day 9', description: 'Angular Pipes', completed: false },
    { id: '10', title: 'Angular Day 10', description: 'Angular Testing', completed: false }
  ]);

  



  override addTask(task: Task): void {
    const id = crypto.randomUUID();
    const newTask: Task = { ...task, id};
    this.tasksList.update(tasks => [...tasks, newTask]);
    console.log('Task added:', task);
  }

  override getTasks() {
    return this.tasksList;
  }

  override deleteTask(taskId: string): void {
    this.tasksList.update(tasks => tasks.filter(task => task.id !== taskId));
  }

 
  override getTaskById(id: string):Signal<Task | undefined> {
    return signal<Task | undefined>(this.tasksList().find(task => task.id === id));
  }

  override updateTask(updatedTask: Task): void {
    this.tasksList.update(tasks => {
      const index = tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        tasks[index] = updatedTask;
      }
      return tasks;
    });
  }

 



}


  