
- **React-style:** Pass function to child and call it → parent updates state
- **Angular-style:** Use `@Output()` in child to emit event → parent listens and handles it

## Step-by-Step Example

### 1. Parent Component (app.component.ts)

```ts
@Component({
  selector: 'app-root',
  template: `
    <h2>Items</h2>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    <app-child (addItem)="handleAddItem($event)"></app-child>
  `
})
export class AppComponent {
  items: string[] = ['Apple', 'Banana'];

  handleAddItem(newItem: string) {
    this.items.push(newItem);
  }
}
```

### 2. Child Component (child.component.ts)

```ts
@Component({
  selector: 'app-child',
  template: `
    <input [(ngModel)]="item" placeholder="Enter item" />
    <button (click)="submitItem()">Add</button>
  `
})
export class ChildComponent {
  @Output() addItem = new EventEmitter<string>();
  item: string = '';

  submitItem() {
    if (this.item.trim()) {
      this.addItem.emit(this.item);
      this.item = '';
    }
  }
}
```

---

## How It Works

- `@Output() addItem` in the child emits an event with a string.
- In the parent template, `(addItem)="handleAddItem($event)"` binds the event to the `handleAddItem()` method.
- When the child emits the event, the parent handles it and updates its state.

---

