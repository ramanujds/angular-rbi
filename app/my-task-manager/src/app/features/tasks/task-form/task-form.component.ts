import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TasksServiceLocal } from '../tasks.service.local';
import { CommonModule } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styles: ``
})
export class TaskFormComponent {

  private taskService = inject(TasksService);
  private fb = inject(FormBuilder);

  taskForm: any;
  showSuccess = false;

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      completed: [false],
    });
  }


  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);
      this.taskForm.reset({ completed: false }); 
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }
      , 2000); 
    }

}
}
