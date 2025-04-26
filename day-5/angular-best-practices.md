## **Architecture & Project Structure**

1. **Use Standalone Components**  
   Keep components decoupled using `standalone: true`. Avoid bloated `NgModules`.

2. **Organize by Features (Not Layers)**  
   Group related components, services, and models under `src/app/features/feature-name/`.

3. **Use Lazy Loading for Feature Modules**  
   Reduce initial bundle size by lazy-loading routes when needed.

4. **Isolate Shared Code**  
   Create `shared/` and `core/` directories for common utilities, services, and UI elements.

---

## **Components**

1. **Make Components Dumb When Possible**  
   Let components handle UI and move logic to services.

2. **Use `@Input()` and `@Output()` wisely**  
   Or prefer function-style inputs with `inputs: []` metadata in standalone components.

3. **Avoid Logic in Templates**  
   Keep templates clean. Move logic to component class or pipes.

4. **Prefer Signals Over `@Input()`/`@Output()` or Observables Where Appropriate**  
   Signals offer simpler reactivity and change detection.

---

## **Services & State Management**

1. **Use Services for Business Logic**  
   Components should not contain business logic. Use services for API calls, signals, or shared state.

2. **Use Signals for Local State**  
   Easier than RxJS for many scenarios; cleaner and synchronous.

3. **Use Dependency Injection over Global State**  
   Inject only what is needed into each service/component to keep them testable and modular.

4. **Create Interfaces for API Models**  
   Define clear interfaces/types for data structures (e.g., `Task`, `User`, etc.)

---

## **Security & Routing**

1. **Use Route Guards for Auth/Permissions**  
   Protect routes using `canActivate`, `canDeactivate`, etc.

2. **Use Interceptors for Auth Tokens & Error Handling**  
   Add JWT tokens, handle `401`, `403`, and general errors centrally.

3. **Avoid Direct DOM Manipulation**  
   Use Angular bindings or directives instead of `document.querySelector()` or `ElementRef.nativeElement`.

---

## **Forms**

1. **Use Reactive Forms for Complex Scenarios**  
   When you need dynamic forms, nested groups, or custom/async validators.

2. **Use Template-Driven Forms for Simpler Cases**  
   Like login or contact forms where simplicity is key.

3. **Group Validations**  
   Keep validation logic inside separate functions or directives.

---

##  **Performance & Optimization**

1. **Track by in `@for` or `*ngFor`**  
   Avoid performance issues by specifying a `trackBy` function or `track` expression.

2. **Avoid Memory Leaks**  
   Unsubscribe manually or use `takeUntilDestroyed()` or `AsyncPipe`.

3. **Bundle & Lazy Load Heavy Libraries**  
   Don’t load unused code or modules upfront.

---

## **Testing**

1. **Write Unit Tests for Services and Components**  
   Use `TestBed` for DI or `Harness` for Angular Material.

2. **E2E Testing with Cypress or Playwright**  
   Especially for critical flows like login, checkout, etc.

---

## **Styling**

1. **Use SCSS or CSS Modules**  
   Prefer `:host`, `:host-context`, and scoped styles over global styles.

2. **Use Bootstrap/Material Responsibly**  
   Don't overuse component libraries. Customize instead of bloating the UI.

