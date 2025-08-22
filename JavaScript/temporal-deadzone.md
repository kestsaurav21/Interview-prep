# Temporal Dead Zone (TDZ) in JavaScript

## 🔹 Definition
The **Temporal Dead Zone (TDZ)** is the time between when a variable is **hoisted** and when it is **initialized**, during which the variable **cannot be accessed**.

- Applies only to **`let`** and **`const`**.  
- Trying to access a variable in the TDZ results in a **ReferenceError**.  

---

## 🔹 Why does it happen?
JavaScript hoists **all declarations** (including `let` and `const`) to the top of their scope.  
But unlike `var`, they are **not initialized with `undefined`**.  

So they stay in an **uninitialized state (TDZ)** until execution reaches the actual line of code where they are defined.  

---

## 🔹 Example 1: `let`
```js
console.log(a); // ❌ ReferenceError
let a = 10;
```

## 🔹 Behind the scenes:

- a is hoisted → placed in memory.

- But it’s not initialized → stays in TDZ.

- Accessing it before line let a = 10; throws error.

- After initialization, it can be used.



## 🔹 Example 2: Accessing `let` before declaration

```javascript
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 20;
console.log(a); // ✅ 20