

### What is TypeScript?**

TypeScript is a **superset of JavaScript** that adds **static typing** and **modern features** like interfaces, generics, access modifiers, etc.

Think of it as JavaScript + types + extra structure.

---

##  Core TypeScript Concepts (with Angular relevance)

### **Types**

TypeScript allows you to define the type of variables.

```ts
let username: string = 'john';
let age: number = 25;
let isLoggedIn: boolean = true;
```

Why useful in Angular?
- Helps in defining component inputs/outputs, service data, etc.

---

### **Interfaces**

Interfaces define the **shape of objects**. They're often used in Angular for typing services, models, etc.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

const user1: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};
```

**Angular use case:** Typing response from an HTTP service.

---

### **Classes**

Angular is **class-based**, so this is central. You define components, services, pipes, etc., as classes.

```ts
class Car {
  constructor(private brand: string, public model: string) {}

  getDetails() {
    return `${this.brand} ${this.model}`;
  }
}

const c = new Car('Toyota', 'Innova');
console.log(c.getDetails()); // Toyota Innova
```

---

### **Access Modifiers**

TypeScript supports `public`, `private`, and `protected`.

```ts
class UserService {
  private secretToken = 'xyz123'; // can't be accessed outside

  getToken() {
    return this.secretToken;
  }
}
```

**Angular use case:** Keep service internals encapsulated.

---

### **Generics**

Generics allow you to write reusable and type-safe code.

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42)); // 42
console.log(identity<string>('Angular')); // Angular
```

**Angular use case:** Generic HTTP services, reusable components.

---

### **Enums**

Enums let you define a set of named constants.

```ts
enum Role {
  Admin,
  User,
  Guest
}

let userRole: Role = Role.Admin;
```

**Angular use case:** Manage user roles, states, and options in a type-safe way.

---

### **Union & Intersection Types**

```ts
let value: string | number; // Union type

interface A {
  a: number;
}
interface B {
  b: string;
}
type C = A & B; // Intersection

const obj: C = { a: 1, b: 'Hello' };
```

---

### **Type Aliases**

```ts
type ID = number | string;
let userId: ID = 101;
```

---

###  **Type Inference**

TypeScript infers types when you assign values directly.

```ts
let city = 'Bangalore'; // inferred as string
```

---

###  **Decorators** (Specific to Angular)

Used to add metadata. Example: `@Component`, `@Injectable`.

```ts
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {}
```


## Optional Arguments and Parameters

You can mark function parameters as optional using `?`.

```ts
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, Age: ${age}` : `Hello ${name}`;
}

greet('Alice');        // Hello Alice
greet('Bob', 30);      // Hello Bob, Age: 30
```

**Use in Angular:** Optional `@Input()` properties for components.

```ts
@Input() title?: string;
```

---

## Default Parameter Values

You can assign default values to function parameters.

```ts
function welcome(user: string = 'Guest') {
  console.log(`Welcome, ${user}`);
}

welcome();         // Welcome, Guest
welcome('Sophie'); // Welcome, Sophie
```

---

## Constructor Parameter Properties

A shorthand in classes for declaring and initializing properties.

```ts
class Product {
  constructor(public name: string, private price: number) {}

  getPrice() {
    return this.price;
  }
}

const p = new Product('Laptop', 1500);
console.log(p.name);       // Laptop
console.log(p.getPrice()); // 1500
```

**Angular use case:**

```ts
constructor(private http: HttpClient, public authService: AuthService) {}
```

---

## Readonly Properties

Properties marked as `readonly` cannot be reassigned after initialization.

```ts
class Config {
  readonly version = '1.0.0';
}

const config = new Config();
// config.version = '2.0.0'; // Error
```

---

## Type Aliases

Type aliases define custom types.

```ts
type Status = 'loading' | 'success' | 'error';

let apiStatus: Status = 'loading';
```

---

## Literal Types

You can specify exact values allowed for a variable.

```ts
type Direction = 'up' | 'down' | 'left' | 'right';

let move: Direction = 'left';
```

---

## Function Overloads

You can define multiple function signatures for the same function name.

```ts
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

combine(1, 2);           // 3
combine('a', 'b');       // 'ab'
```

---

## Never Type

Used for functions that never return.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## Tuple Types

Used to declare fixed-length arrays with specified types.

```ts
let user: [number, string] = [1, 'Alice'];
```


