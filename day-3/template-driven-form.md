
## What are Template-Driven Forms?

- Use Angular **directives** (`ngModel`, `required`, `#form="ngForm"`, etc.)
- Logic resides mostly in the **HTML template**
- Easier and quicker to set up than reactive forms
- Great for simple or small forms

---

## Setup

In your `AppModule` or standalone component, import:

```ts
import { FormsModule } from '@angular/forms';
```

If you're using standalone components:

```ts
@Component({
  standalone: true,
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  imports: [FormsModule],
})
```

---

## Example: Contact Form with Validation

### `contact-form.component.html`

```html
<form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" novalidate>
  <!-- Name -->
  <div>
    <label>Name</label>
    <input name="name" [(ngModel)]="contact.name" required #nameRef="ngModel" />
    <div *ngIf="nameRef.invalid && nameRef.touched">
      Name is required.
    </div>
  </div>

  <!-- Email -->
  <div>
    <label>Email</label>
    <input name="email" [(ngModel)]="contact.email" required email #emailRef="ngModel" />
    <div *ngIf="emailRef.invalid && emailRef.touched">
      <div *ngIf="emailRef.errors?.['required']">Email is required.</div>
      <div *ngIf="emailRef.errors?.['email']">Invalid email address.</div>
    </div>
  </div>

  <!-- Message -->
  <div>
    <label>Message</label>
    <textarea name="message" [(ngModel)]="contact.message" required minlength="10" #messageRef="ngModel"></textarea>
    <div *ngIf="messageRef.invalid && messageRef.touched">
      <div *ngIf="messageRef.errors?.['required']">Message is required.</div>
      <div *ngIf="messageRef.errors?.['minlength']">At least 10 characters required.</div>
    </div>
  </div>

  <button type="submit" [disabled]="contactForm.invalid">Send</button>
</form>
```

### `contact-form.component.ts`

```ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  imports: [FormsModule],
})
export class ContactFormComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted', this.contact);
      // You can reset the form if needed
      form.reset();
    }
  }
}
```

---



