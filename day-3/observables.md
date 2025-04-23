
## What is an Observable?

An **Observable** is a way to handle **asynchronous data streams**. Think of it like a pipe: data flows through it over time, and you can react to that flow.

It’s similar to a `Promise`, but with much more power:
- **Promises** emit one value and complete.
- **Observables** can emit **multiple values over time**.

---

## 🔹 Common Use Cases in Angular

| Use Case                     | Observable Used |
|-----------------------------|------------------|
| HTTP Requests               | `HttpClient.get()` returns Observable |
| User input (e.g., search)   | `FormControl.valueChanges` |
| Route params                | `ActivatedRoute.params` |
| WebSocket streams           | Live data |
| Custom services             | Emit data to many components |
| Debounce, map, filter, etc. | RxJS operators |

---

## Basic Example

```ts
import { Observable } from 'rxjs';

const obs$ = new Observable(observer => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});

obs$.subscribe(value => {
  console.log(value);
});
```

### Output:
```
Hello
World
```

---

## Example - HTTP Call

```ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:5000/tasks');
  }
}
```

### In Component

```ts
tasks: Task[] = [];

ngOnInit() {
  this.taskService.getTasks().subscribe(data => {
    this.tasks = data;
  });
}
```

---

## RxJS Operators (Power Tools)

These operators let you **transform** or **control** the stream:

| Operator      | Purpose                           |
|---------------|------------------------------------|
| `map()`       | Transform each value               |
| `filter()`    | Filter out unwanted values         |
| `debounceTime()` | Wait before emitting             |
| `switchMap()` | Cancel previous request & switch   |
| `catchError()` | Handle errors gracefully           |

### Example: Search with Debounce

```ts
this.searchInput.valueChanges.pipe(
  debounceTime(300),
  filter(text => text.length > 2),
  switchMap(text => this.api.search(text))
).subscribe(results => {
  this.items = results;
});
```

---

## Observables vs Signals

| Feature        | Observable           | Signal                     |
|----------------|----------------------|-----------------------------|
| Purpose        | Asynchronous streams | Reactive state for UI      |
| Usage          | Data from backend, events | Component-level reactivity |
| Multiple values| ✅                    | ❌ (holds current value only) |
| Cancellation   | ✅ (unsubscribe)      | ❌ (not needed)             |
| Complexity     | High for beginners   | Easier in modern Angular   |

### When to Use Signals?

Signals are great for:

- Simple state management
- Component-level reactivity
- When you need a single value that changes over time

### When to Use Observables?

Observables are perfect for:
- Anything asynchronous (HTTP, user input, routing, sockets)
- Reacting to continuous changes over time
- Managing complex data flows and side effects with RxJS

