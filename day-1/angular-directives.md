## Angular Directives

### What are Directives?
Directives are a core feature of Angular that allow you to extend HTML with custom attributes and elements. They enable you to create reusable components and manipulate the DOM in a declarative way.

### Types of Directives

1. **Components**: A directive with a template. It is the most common type of directive and is used to create reusable UI components.
    - Example: `<app-header></app-header>`

2. **Structural Directives**: These directives change the structure of the DOM by adding or removing elements. They are prefixed with an asterisk (*) in the template.
    - Example: `*ngIf`, `*ngFor`, `*ngSwitch`
    - Usage:
      ```html
      <div *ngIf="isVisible">Content is visible</div>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
      ```
## New way of using structural directives

## @if, @for, @switch in Angular 17
- The new syntax for structural directives allows you to use them without the asterisk (*) prefix.
- This makes the code cleaner and easier to read.
- The new syntax is available in Angular 17 and later versions.

- Example:
  ```html
  @if (a > b) {
  {{ a }} is greater than {{ b }}
} @else if (b > a) {
{{ a }} is less than {{ b }}
} @else {
{{ a }} is equal to {{ b }}
}
    ```
- Example:
```html
  @for (item of items; track item.id) {
  {{ item.name }}
}
  ```
  
- Example:

```html
@for (item of items; track item.name) {
  <li>{{ item.name }}</li>
} @empty {
  <li>No items to display!</li>
}
```

- Example:
```html

@switch (userPermissions) {
  @case ('admin') {
    <app-admin-dashboard />
  }
  @case ('editor') {
    <app-editor-dashboard />
  }
  @default {
    <app-viewer-dashboard />
  }
}
```

### To migrate your existing Angular code to the new control flow syntax, just run this command:

```bash
ng generate @angular/core:control-flow
```

All your *ngIf, *ngFor, and *ngSwitch directives will be automatically updated to the new syntax!

### Attribute Directives

Attribute directives are used to change the appearance or behavior of an existing element. They do not create new elements but modify the existing ones.

- Example: `ngClass`, `ngStyle`
- Usage:
  ```html
  <div [ngClass]="{'active': isActive}">Active Class</div>
  <div [ngStyle]="{'color': textColor}">Styled Text</div>
  ```



  
 
