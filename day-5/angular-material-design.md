
## What is Angular Material?

Angular Material is a UI component library developed by the Angular team. It implements the **Material Design system** by Google and provides modern, responsive, and accessible UI components ready to use in Angular projects.


## How to Add Angular Material

Install and configure:

```bash
ng add @angular/material
```

- Select a theme (e.g., Indigo/Pink)
- Optionally add global typography and animations

---

## Commonly Used Angular Material Components (With Examples)

---

### 1. **Button**

```html
<button mat-button>Default</button>
<button mat-raised-button color="primary">Primary</button>
```

---

### 2. **Toolbar**

```html
<mat-toolbar color="primary">
  <span>My App</span>
</mat-toolbar>
```

---

### 3. **Card**

```html
<mat-card>
  <mat-card-title>Task</mat-card-title>
  <mat-card-content>Task description goes here.</mat-card-content>
</mat-card>
```

---

### 4. **Form Field + Input**

```html
<mat-form-field appearance="fill">
  <mat-label>Title</mat-label>
  <input matInput placeholder="Enter title">
</mat-form-field>
```

---

### 5. **Dialog (Modal)**

```ts
const dialogRef = this.dialog.open(MyDialogComponent, {
  data: { message: 'Are you sure?' }
});

dialogRef.afterClosed().subscribe(result => {
  if (result) {
    // proceed
  }
});
```

---

### 6. **Sidenav + Navigation**

```html
<mat-sidenav-container>
  <mat-sidenav mode="side" opened>Sidenav content</mat-sidenav>
  <mat-sidenav-content>Main content</mat-sidenav-content>
</mat-sidenav-container>
```

---

### 7. **Table**

```html
<mat-table [dataSource]="data">
  <ng-container matColumnDef="name">
    <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>
    <mat-cell *matCellDef="let item">{{ item.name }}</mat-cell>
  </ng-container>
  <mat-header-row *matHeaderRowDef="['name']"></mat-header-row>
  <mat-row *matRowDef="let row; columns: ['name'];"></mat-row>
</mat-table>
```

---

### 8. **SnackBar (Notification)**

```ts
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private snackBar: MatSnackBar) {}

this.snackBar.open('Task added successfully', 'Close', {
  duration: 3000,
});
```

---

### 9. **Stepper (Multi-step forms)**

```html
<mat-horizontal-stepper>
  <mat-step label="Step 1">Content 1</mat-step>
  <mat-step label="Step 2">Content 2</mat-step>
</mat-horizontal-stepper>
```

---

## How to Import Components

You must import Material modules in your component or shared module:

```ts
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatCardModule]
})
```

If you're using **standalone components**, you can import directly in the component:

```ts
@Component({
  standalone: true,
  imports: [MatCardModule],
})
```

---

## Layout Utilities with Angular Flex-Layout or CSS

Angular Material provides grid and responsive layouts, but it can be paired with:
- Angular Flex Layout
- CSS Grid / Flexbox

---