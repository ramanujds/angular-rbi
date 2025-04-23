
## 1. Basic Error Handling with `catchError`

Import `catchError` and `throwError` from `rxjs`.

```ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get('http://localhost:5000/tasks').pipe(
      catchError(err => {
        console.error('Error occurred:', err);
        return throwError(() => new Error('Failed to fetch tasks'));
      })
    );
  }
}
```

---

## 2. Custom Error Handler (Optional but Good Practice)

You can centralize error handling in one place.

### error-handler.service.ts

```ts
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  handle(error: HttpErrorResponse) {
    let message = 'An unknown error occurred.';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      message = `Client error: ${error.error.message}`;
    } else {
      // Server-side error
      message = `Server error ${error.status}: ${error.message}`;
    }

    console.error(message);
    return throwError(() => new Error(message));
  }
}
```

### Use it in your service:

```ts
constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

getTasks() {
  return this.http.get('http://localhost:5000/tasks').pipe(
    catchError(err => this.errorHandler.handle(err))
  );
}
```

---

## Handling Errors in the Component

You can catch errors directly in the component too, especially if you want to show a notification:

```ts
this.taskService.getTasks().subscribe({
  next: data => this.tasks = data,
  error: err => this.errorMessage = err.message
});
```

You can display `errorMessage` in your template as a Bootstrap alert or similar.

---

##  Retry Automatically

You can use RxJS `retry()` to automatically retry failed requests:

```ts
import { retry } from 'rxjs';

getTasks() {
  return this.http.get('http://localhost:5000/tasks').pipe(
    retry(2), // Retry twice before failing
    catchError(err => this.errorHandler.handle(err))
  );
}
```

---

## Using `finalize()` for Loaders

If you're showing a loader:

```ts
this.loading = true;
this.taskService.getTasks().pipe(
  finalize(() => this.loading = false)
).subscribe({
  next: tasks => this.tasks = tasks,
  error: err => this.error = err.message
});
```

This will ensure that the loader is hidden regardless of success or failure.

