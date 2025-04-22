
## What Are Signals?

A **Signal** is a special reactive primitive that holds a value and **notifies dependents** when that value changes. You can think of it as a *reactive variable*.

```ts
const counter = signal(0);

counter(); // returns current value
counter.set(1); // updates value
```

---

## Why Signals?

Prior to Signals, Angular relied heavily on:
- `RxJS` for state management
- `@Input()` + `@Output()` for data flow
- Change detection via `Zone.js`

**Signals simplify** this with:
- Direct, synchronous reactivity
- Fine-grained change tracking
- Better performance (no Zone.js needed)

---

## Creating a Signal

```ts
import { signal } from '@angular/core';

const message = signal('Hello');
```

---

## Basic Signal Methods

### 1. `signal()` → creates a new signal
```ts
const count = signal(0);
```

###  `count()` → reads the value
```ts
console.log(count()); // 0
```

###  `count.set(value)` → sets a new value
```ts
count.set(5);
```

### `count.update(fn)` → updates value based on previous
```ts
count.update(prev => prev + 1);
```

###  `count.mutate(fn)` → mutates the object directly (for arrays/objects)
```ts
const tasks = signal<Task[]>([]);

tasks.mutate(list => {
  list.push({ id: 1, title: 'Buy milk' });
});
```

---

## Derived Signals

You can derive new signals from existing ones:

```ts
const count = signal(5);

const double = computed(() => count() * 2);
console.log(double()); // 10
```

---

## Effect (Side Effects)

Runs code **whenever signal dependencies change**.

```ts
const name = signal('Angular');

effect(() => {
  console.log('Name changed to', name());
});
```

---

## Task List with Signals

```ts
const tasks = signal<Task[]>([]);

// add task
function addTask(title: string) {
  tasks.mutate(list => list.push({ id: crypto.randomUUID(), title }));
}

// delete task
function deleteTask(id: string) {
  tasks.update(list => list.filter(t => t.id !== id));
}

// total tasks
const taskCount = computed(() => tasks().length);
```

Then use in your component like:
```html
<p>Total: {{ taskCount() }}</p>

@for (task of tasks(); track task.id) {
  <p>{{ task.title }}</p>
}
```

---
