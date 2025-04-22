## How `@Output()` works in Angular.

---

### Scenario
We want a **child component** with a button. When the button is clicked, it sends a message to the **parent component** using `@Output()`.

---

### 1. Child Component: `MessageButtonComponent`

```ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-message-button',
  template: `
    <button (click)="sendMessage()">Send Message</button>
  `,
  imports: [CommonModule]
})
export class MessageButtonComponent {
  @Output() messageSent = new EventEmitter<string>();

  sendMessage() {
    this.messageSent.emit('Hello from child!');
  }
}
```

- `@Output() messageSent` creates an event
- `emit()` sends a message when the button is clicked

---

### 2. Parent Component: `ParentComponent`

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageButtonComponent } from './message-button.component';

@Component({
  standalone: true,
  selector: 'app-parent',
  template: `
    <app-message-button (messageSent)="handleMessage($event)"></app-message-button>
    <p>Received: {{ message }}</p>
  `,
  imports: [CommonModule, MessageButtonComponent]
})
export class ParentComponent {
  message = '';

  handleMessage(msg: string) {
    this.message = msg;
  }
}
```

- Listens to `(messageSent)` event
- Updates the `message` variable with the data from the child

---

### Output in the browser

```
[Button: Send Message]
Received: Hello from child!
```

When you click the button, the parent displays the message received from the child.
