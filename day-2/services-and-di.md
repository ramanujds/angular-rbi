## 1. Services and DI in Older Angular (Module-based approach)

### Service Declaration

Services were typically provided in:

- `NgModule.providers` array
- Or decorated with `@Injectable({ providedIn: 'root' })` for global singleton

Example:

```ts
@Injectable({ providedIn: 'root' })
export class TaskService {
  getTasks() {
    return ['Task 1', 'Task 2'];
  }
}
```

### Dependency Injection in Components

Injected through the constructor:

```ts
@Component({ ... })
export class TaskComponent {
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    const tasks = this.taskService.getTasks();
  }
}
```

### Key Characteristics

- Requires a module (`NgModule`)
- Constructor injection is required
- Services are registered globally or within specific modules
- Lazy-loaded modules can create separate instances of services unless `providedIn: 'root'` is used

---

## 2. Services and DI in New Angular (Standalone components and inject function)

Starting with Angular 14 (and more idiomatically in Angular 16+), standalone components and the `inject()` function simplify DI and reduce boilerplate.

### Service Declaration

You can still use `@Injectable({ providedIn: 'root' })` for singleton services.

```ts
@Injectable({ providedIn: 'root' })
export class TaskService {
  getTasks() {
    return ['Task 1', 'Task 2'];
  }
}
```

Or register locally inside a standalone component:

```ts
@Component({
  standalone: true,
  selector: 'app-task',
  templateUrl: './task.component.html',
  providers: [TaskService]
})
export class TaskComponent { ... }
```

### Dependency Injection using `inject()`

You can now inject services anywhere in the class (not just constructor) using `inject()`:

```ts
@Component({ ... })
export class TaskComponent {
  private taskService = inject(TaskService);

  tasks = this.taskService.getTasks();
}
```

This also works inside lifecycle hooks or helper methods:

```ts
ngOnInit() {
  const tasks = this.taskService.getTasks();
}
```

### Key Characteristics

- No `NgModule` required
- You can register services directly in the standalone component
- More flexible and readable with `inject()` for service access
- Easier testing and isolation
- Tree-shakable and modular

