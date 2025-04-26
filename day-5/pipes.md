## What Are Pipes?

Pipes are simple functions that take in a **value**, process it, and return a **transformed value**.

Example syntax in a template:

```html
<p>{{ today | date }}</p>
```

Here, the `date` pipe transforms the `today` object into a formatted date string.

---

## Built-in Pipes in Angular

Some commonly used Angular pipes include:

| Pipe            | Description                                   |
|-----------------|-----------------------------------------------|
| `date`          | Formats a date value                          |
| `uppercase`     | Transforms text to uppercase                  |
| `lowercase`     | Transforms text to lowercase                  |
| `currency`      | Formats a number as currency                  |
| `percent`       | Formats a number as a percentage              |
| `json`          | Converts an object into a JSON string         |
| `slice`         | Returns a subset of an array or string        |
| `async`         | Subscribes to an observable and returns value|

---

## ✅ Example Usage

```html
<p>{{ name | uppercase }}</p>
<p>{{ price | currency:'INR' }}</p>
<p>{{ dateOfBirth | date:'longDate' }}</p>
<p>{{ percentage | percent }}</p>
<p>{{ longText | slice:0:50 }}...</p>
```

---

## Creating a Custom Pipe

Let’s create a pipe that capitalizes the first letter of every word:

### Step 1: Generate a pipe

```bash
ng generate pipe capitalize --standalone
```

### Step 2: Implement the logic

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.replace(/\b\w/g, char => char.toUpperCase());
  }
}
```

### Step 3: Use it in your component

```html
<p>{{ 'angular is awesome' | capitalize }}</p>
```

Output:
```
Angular Is Awesome
```

---

## Pipes and Standalone Components

You can import standalone pipes directly in the component:

```ts
import { Component } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CapitalizePipe],
  template: `<p>{{ 'angular with pipes' | capitalize }}</p>`
})
export class ExampleComponent {}
```

---

## Pure vs Impure Pipes

- **Pure Pipes**: Only execute when the input value changes.
- **Impure Pipes**: Execute on every change detection cycle. Use with caution for performance.

To mark a pipe as **impure**:

```ts
@Pipe({ name: 'impureExample', pure: false })
```

---
