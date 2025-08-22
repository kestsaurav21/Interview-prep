# var vs let vs const in JavaScript

## 1. Scope
- **`var`** → Function-scoped  
- **`let` & `const`** → Block-scoped (`{ }`)

```js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ✅ 10 (accessible outside block)
console.log(b); // ❌ ReferenceError (block scoped)
console.log(c); // ❌ ReferenceError (block scoped)
```

---

## 2. Hoisting
- **`var`** → Hoisted & initialized as `undefined`.  
- **`let` & `const`** → Hoisted but not initialized (Temporal Dead Zone).

```js
console.log(x); // undefined
var x = 5;

console.log(y); // ❌ ReferenceError
let y = 10;

console.log(z); // ❌ ReferenceError
const z = 15;
```

---

## 3. Re-declaration
- **`var`** → Can be re-declared in the same scope.  
- **`let` & `const`** → Cannot be re-declared in the same scope.

```js
var a = 1;
var a = 2; // ✅ allowed

let b = 1;
// let b = 2; // ❌ SyntaxError

const c = 1;
// const c = 2; // ❌ SyntaxError
```

---

## 4. Re-assignment
- **`var`** → Allowed  
- **`let`** → Allowed  
- **`const`** → ❌ Not allowed (must stay constant)

```js
var x = 5;
x = 10;  // ✅ allowed

let y = 20;
y = 30;  // ✅ allowed

const z = 40;
z = 50;  // ❌ TypeError
```

---

## 5. Best Practices
- **Avoid `var`** → leads to scope bugs, hoisting issues.  
- **Use `let`** → for variables that change.  
- **Use `const`** → for variables that should not change (default choice).

---

## 6. Side-by-Side Table

| Feature          | var                  | let                  | const                 |
|------------------|----------------------|----------------------|-----------------------|
| **Scope**        | Function-scoped      | Block-scoped         | Block-scoped          |
| **Hoisting**     | Hoisted → `undefined` | Hoisted → TDZ        | Hoisted → TDZ         |
| **Re-declaration** | ✅ Allowed          | ❌ Not allowed       | ❌ Not allowed        |
| **Re-assignment** | ✅ Allowed           | ✅ Allowed           | ❌ Not allowed        |
| **Use Case**      | Legacy code only     | Changing variables   | Constants / defaults  |

---

✅ **In short:**  
- Use `const` by default.  
- Use `let` when you know the value will change.  
- Avoid `var` unless working with old codebases.
