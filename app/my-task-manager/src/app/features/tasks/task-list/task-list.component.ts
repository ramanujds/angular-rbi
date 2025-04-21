import { CommonModule } from '@angular/common';
import { Component,Signal,computed,inject } from '@angular/core';
import { TasksServiceLocal } from '../tasks.service.local';
import { Task } from '../../../models/Task';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TasksServiceBackend } from '../tasks.service.backend';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-list.component.html',
  styles: ``
})
export class TaskListComponent {

  private taskService = inject(TasksService);
  private fb = inject(FormBuilder);
  tasks: Signal<Task[]> = this.taskService.getTasks();
  editId?: string;
  editForm = this.fb.group({
    title: [''],
    description: [''],
    completed: [false]
  });

  deleteTask(id: any) {
    this.taskService.deleteTask(id);
  }

  editTask(task: Task) {
    this.editId = task.id;
    this.editForm.setValue({
      title: task.title,
      description: task.description || '',
      completed: task.completed,
    });
  }

  saveEdit(id: any) {
    if (this.editForm.valid) {
      const updatedTask: Task = { 
        id, 
        title: this.editForm.value.title || '', 
        description: this.editForm.value.description || '', 
        completed: this.editForm.value.completed || false 
      };
      this.taskService.updateTask(updatedTask);
      this.cancelEdit();
    }
  }

    cancelEdit() {
      this.editId = undefined;
      this.editForm.reset();
    }


}
