
## Use Cases of Pipes

### 1. **Date Formatting for Task Deadlines**

Display task due dates in a readable format.

```html
<p>Due: {{ task.dueDate | date:'mediumDate' }}</p>
```

> Shows: `Due: Apr 25, 2025`

---

### 2. **Priority Label with Uppercase**

Make priority levels visually consistent.

```html
<span class="badge" [ngClass]="task.priority">{{ task.priority | uppercase }}</span>
```

> Converts "high" → "HIGH"

---

### 3. **Truncate Long Descriptions (Custom Pipe)**

**Create a pipe** to limit the length of task descriptions:

```ts
@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}
```

**Use it:**

```html
<p>{{ task.description | truncate:80 }}</p>
```

> Useful when showing tasks in a list or card view.

---

### 4. **Filter Tasks by Status (Custom Pipe)**

**Custom pipe to show only completed or pending tasks:**

```ts
@Pipe({
  name: 'filterByStatus',
  standalone: true
})
export class FilterByStatusPipe implements PipeTransform {
  transform(tasks: any[], status: string): any[] {
    return tasks.filter(task => task.status === status);
  }
}
```

**Use it:**

```html
<div *ngFor="let task of tasks | filterByStatus:'completed'">
  {{ task.title }}
</div>
```

> Handy in dashboards where you show "Completed Tasks" and "Pending Tasks".

---

### 5. **Convert Boolean to Readable Status**

```html
<p>Status: {{ task.completed ? 'Done' : 'In Progress' }}</p>
```

Or use a custom pipe for reusability:

```ts
@Pipe({
  name: 'statusText',
  standalone: true
})
export class StatusTextPipe implements PipeTransform {
  transform(completed: boolean): string {
    return completed ? 'Completed ✅' : 'In Progress 🔄';
  }
}
```
**Use it:**

```html
<p>Status: {{ task.completed | statusText }}</p>
```



