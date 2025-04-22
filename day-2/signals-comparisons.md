## Let’s compare **two versions of a TaskService** side by side:

- One using a **plain property**
- One using **Angular signals**


## Version 1: Service Using a Plain Property

### task.service.ts

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskServicePlain {
  tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
  }

  deleteTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  getTasks(): string[] {
    return this.tasks;
  }
}
```

### In Component

```ts
ngOnInit() {
  this.tasks = this.taskService.getTasks();
}
```

- You must **manually update the UI** whenever the service state changes.
- No automatic reactivity.
- Simple, but not reactive.

---

## Version 2: Service Using Angular `signal()`

### task.service.ts

```ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskServiceSignal {
  private tasks = signal<string[]>([]);

  getTasks = this.tasks; // expose signal

  addTask(task: string) {
    this.tasks.update(tasks => [...tasks, task]);
  }

  deleteTask(task: string) {
    this.tasks.update(tasks => tasks.filter(t => t !== task));
  }
}
```

### In Component

```ts
tasks = this.taskService.getTasks(); // returns a signal

// used directly in template with `@for`
```

No need for manual refresh or lifecycle hooks — the view reacts automatically.

