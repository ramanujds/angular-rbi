Angular **lifecycle hooks** are callbacks that allow you to tap into key moments in a component or directive’s life — like initialization, change detection, and destruction.



## Common Lifecycle Hooks

| Hook              | Purpose                                                       |
|-------------------|---------------------------------------------------------------|
| `ngOnInit()`       | Called after the component’s inputs are set (initialization) |
| `ngOnChanges()`    | Called when input-bound properties change                    |
| `ngAfterViewInit()`| Called after the component's view is fully initialized       |
| `ngOnDestroy()`    | Called just before the component is destroyed                |

### Example:

```ts
@Component({
  selector: 'app-task-card',
  standalone: true,
  template: `<p>{{ task.title }}</p>`
})
export class TaskCardComponent implements OnInit, OnDestroy {
  @Input() task!: Task;

  ngOnInit() {
    console.log('TaskCard initialized');
  }

  ngOnDestroy() {
    console.log('TaskCard destroyed');
  }
}
```

These work exactly the same in **standalone components** as they do in traditional NgModules.

---

## Are They Required?

Not at all — only use them if needed:

- `ngOnInit()` is commonly used for fetching data or setting up state.
- `ngOnDestroy()` is often used to **clean up subscriptions**, intervals, or event listeners.

If your component doesn’t need these hooks, you don’t need to implement them.

---

## What Are the Alternatives in Angular 18/19 Versions?

With the introduction of **Signals** and new reactive primitives, Angular offers **more declarative** and **reactive alternatives** to some lifecycle patterns.

### Example: Replacing `ngOnInit` with `effect()`

Instead of fetching data in `ngOnInit`, use an `effect()`:

```ts
import { effect } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  template: `<p>Task count: {{ tasks().length }}</p>`
})
export class DashboardComponent {
  private taskService = inject(TaskService);
  tasks = signal<Task[]>([]);

  constructor() {
    effect(() => {
      this.taskService.getTasks().subscribe(data => {
        this.tasks.set(data);
      });
    });
  }
}
```

This replaces both `ngOnInit` and `ngOnChanges` use cases.

---

