import { inject, Injectable, Signal, signal } from '@angular/core';
import { Task } from '../../models/Task';
import { HttpClient } from '@angular/common/http';
import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceBackend extends TasksService {

  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:5000/api/v1/tasks';
  private _tasks = signal<Task[]>([]);
  tasks = this._tasks.asReadonly();

  constructor() {
    super();
    this.loadTasks();
  }

  private loadTasks() {
    this.http.get<Task[]>(this.baseUrl).subscribe(tasks => {
      this._tasks.set(tasks);
    });
  }
  override addTask(task: Task): void {
    const id = crypto.randomUUID();
    const newTask: Task = { ...task, id };
    this.http.post<Task>(this.baseUrl, newTask).subscribe(() => {
      this._tasks.update(tasks => [...tasks, newTask]);
    });
  }

  override getTasks(): Signal<Task[]> {
    return this.tasks;
  }

  override deleteTask(taskId: string): void {
    this.http.delete(`${this.baseUrl}/${taskId}`).subscribe(() => {
      this._tasks.update(tasks => tasks.filter(task => task.id !== taskId));
    });
  }

  override getTaskById(id: string): Signal<Task | undefined> {
    return signal<Task | undefined>(this._tasks().find(task => task.id === id));

  }

  override updateTask(updatedTask: Task): void {
    this.http.put<Task>(`${this.baseUrl}/${updatedTask.id}`, updatedTask).subscribe(() => {
      this._tasks.update(tasks => {
        const index = tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
          tasks[index] = updatedTask;
        }
        return tasks;
      });
    });
  }

  


}
