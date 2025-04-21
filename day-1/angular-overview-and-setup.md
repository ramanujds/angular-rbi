## Angular Framework Overview

Angular is a **TypeScript-based front-end web application framework** developed and maintained by Google. It is used for building **single-page applications (SPAs)** with a **component-based architecture**.

### Key Features

1. **Component-Based Architecture**  
   The UI is built using components—each with its own HTML, CSS, and logic.

2. **TypeScript Support**  
   Angular is written in and uses TypeScript, which brings strong typing and modern features.

3. **Two-Way Data Binding**  
   Synchronizes data between model and view.

4. **Dependency Injection (DI)**  
   Built-in DI system to manage service dependencies efficiently.

5. **Routing**  
   Built-in support for routing between views or components.

6. **RxJS & Observables**  
   Reactive programming with powerful async handling via Observables.

7. **Directives and Pipes**  
   Directives for DOM manipulation and Pipes for transforming data in templates.

8. **Forms (Template-Driven and Reactive)**  
   Angular provides two ways to build and manage forms.

9. **CLI Tooling**  
   The Angular CLI (Command Line Interface) simplifies development tasks like scaffolding, testing, and building.

---

## Setting Up Angular Development Environment

### Step 1: Install Node.js and npm

Angular requires Node.js and npm.  
Download and install from:  
[https://nodejs.org/](https://nodejs.org/)

Check versions:

```bash
node -v
npm -v
```

---

### Step 2: Install Angular CLI

The Angular CLI is the official tool for creating and managing Angular projects.

```bash
npm install -g @angular/cli
```

Verify installation:

```bash
ng version
```

---

### Step 3: Create a New Angular Project

```bash
ng new my-app
```

- It will ask for routing setup and stylesheet format (CSS, SCSS, etc.)
- It creates a new folder with all necessary files and folders

Navigate to your app folder:

```bash
cd my-app
```

---

### Step 4: Run the Application

```bash
ng serve
```

Or with a specific port:

```bash
ng serve --port 4201
```

Then open your browser and go to `http://localhost:4200`

---

### Project Structure Overview

```
my-app/
│
├── src/
│   ├── app/
│   │   ├── app.component.ts       → Root component logic
│   │   ├── app.component.html     → Root component template
│   │   ├── app.component.css      → Root component styles
│   │   └── app.module.ts          → Root module
│
├── angular.json                  → Angular CLI config
├── package.json                  → Project dependencies
└── tsconfig.json                 → TypeScript configuration
```

---

### Step 5: Install Extensions (Optional but Recommended)

If you're using **VS Code**, install these:

- Angular Language Service
- ESLint
- Prettier

---

### Step 6: Basic Angular CLI Commands

- Generate a component:

  ```bash
  ng generate component home
  ```

- Generate a service:

  ```bash
  ng generate service user
  ```

- Build the app:

  ```bash
  ng build
  ```
