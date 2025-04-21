## What is a Component?

In Angular, a **component** controls a part of the UI—think of it as a building block of your app.

Each component is made up of:
- **Class** (TypeScript): Contains the logic and data
- **Template** (HTML): Defines the UI
- **Styles** (CSS/SCSS): Defines how it looks
- **Metadata** (Decorator): Tells Angular how to use the component

---

## Basic Component Example

Let’s create a simple component named `HelloComponent`.

### 1. Create with CLI

```bash
ng generate component hello
```

This creates:

```
src/app/hello/
├── hello.component.ts       // Component class
├── hello.component.html     // Template
├── hello.component.css      // Styles
└── hello.component.spec.ts  // Test file
```

### 2. hello.component.ts

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello', // HTML tag used to insert this component
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  message = 'Hello from Angular!';
}
```

### 3. hello.component.html

```html
<h2>{{ message }}</h2>
```

### 4. Using the Component in App

In `app.component.html`, use the selector like a tag:

```html
<app-hello></app-hello>
```

---

## Component Anatomy

### Class

Holds the data and logic (written in TypeScript).

```ts
export class HelloComponent {
  message = 'Hello!';
}
```

### Template

The HTML part, where you use Angular syntax like interpolation, directives, and bindings.

```html
<h2>{{ message }}</h2>
```

### Metadata (`@Component`)

Provides info to Angular on how to use the component.

```ts
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
```

---

## Input and Output

### @Input() – Accept data from parent

```ts
// hello.component.ts
@Input() userName: string = '';
```

```html
<!-- app.component.html -->
<app-hello [userName]="'John'"></app-hello>
```

### @Output() – Emit events to parent

```ts
@Output() greet = new EventEmitter<string>();

sendGreeting() {
  this.greet.emit('Hello from child');
}
```

```html
<!-- Parent template -->
<app-hello (greet)="handleGreeting($event)"></app-hello>
```

