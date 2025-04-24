
## App Structure

```
src/
├── app/
│   ├── app.component.ts
│   ├── app.routes.ts
│   ├── tasks/
│   │   ├── task-list.component.ts
│   │   ├── task-form.component.ts
│   │   ├── task.service.ts
│   │   └── task.model.ts
│   └── shared/
│       ├── confirm-dialog.component.ts
```

---

## Example Components

### 1. **Toolbar in AppComponent**

```html
<!-- app.component.html -->
<mat-toolbar color="primary">Task Manager</mat-toolbar>
<router-outlet></router-outlet>
```

---

### 2. **Task List with Cards**

```ts
// task-list.component.ts
@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  selector: 'app-task-list',
  template: `
    <div class="task-list">
      <mat-card *ngFor="let task of tasks">
        <mat-card-title>{{ task.title }}</mat-card-title>
        <mat-card-content>{{ task.description }}</mat-card-content>
        <button mat-button color="accent" [routerLink]="['/edit', task.id]">Edit</button>
        <button mat-button color="warn" (click)="confirmDelete(task)">Delete</button>
      </mat-card>
    </div>
  `,
  styles: [`.task-list { display: flex; flex-wrap: wrap; gap: 1rem; }`]
})
export class TaskListComponent {
  tasks = this.taskService.getAll();
  constructor(private taskService: TaskService) {}

  confirmDelete(task: Task) {
    // open dialog and call service to delete
  }
}
```

---

### 3. **Reactive Form with Material**

```ts
// task-form.component.ts
@Component({
  standalone: true,
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <mat-form-field appearance="fill">
        <mat-label>Title</mat-label>
        <input matInput formControlName="title">
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Description</mat-label>
        <textarea matInput formControlName="description"></textarea>
      </mat-form-field>

      <button mat-raised-button color="primary" type="submit">Save</button>
    </form>
  `
})
export class TaskFormComponent {
  form = this.fb.group({
    title: ['', Validators.required],
    description: ['']
  });

  constructor(private fb: FormBuilder, private taskService: TaskService, private snackBar: MatSnackBar) {}

  submit() {
    if (this.form.valid) {
      this.taskService.add(this.form.value);
      this.snackBar.open('Task added!', 'Close', { duration: 3000 });
    }
  }
}
```

---

### 4. **Dialog for Confirming Delete**

```ts
// confirm-dialog.component.ts
@Component({
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Confirm</h2>
    <mat-dialog-content>Delete this task?</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close(false)">Cancel</button>
      <button mat-button color="warn" (click)="dialogRef.close(true)">Delete</button>
    </mat-dialog-actions>
  `
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}
}
```

---

### 5. **Routing Setup**

```ts
// app.routes.ts
export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add', component: TaskFormComponent },
  { path: 'edit/:id', component: TaskFormComponent },
];
```

---

### 6. **Task Service (In-Memory)**

```ts
@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];

  getAll() { return this.tasks; }
  add(task: Task) { this.tasks.push(task); }
  update(id: string, task: Task) { /* update logic */ }
  delete(id: string) { this.tasks = this.tasks.filter(t => t.id !== id); }
}
```

---
