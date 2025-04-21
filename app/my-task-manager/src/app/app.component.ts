import { Component } from '@angular/core';
import { RouterOutlet,Router, RouterModule } from '@angular/router';
import { TaskFormComponent } from "./features/tasks/task-form/task-form.component";
import { TaskListComponent } from "./features/tasks/task-list/task-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-task-manager';
}
