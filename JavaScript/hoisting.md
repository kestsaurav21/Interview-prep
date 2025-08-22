# JavaScript Hoisting

Hoisting is a phenomenon in JavaScript where variable and function declarations are **moved to the top of their scope** during the compilation phase.  
This means you can sometimes access variables and functions **before their actual initialization** in the code.

---


## 🔹 Step-by-Step Explanations

### 1. Using `var` vs. undeclared variable
```js
console.log(y);
y = 1;
```
**Output:**
```text
ReferenceError: y is not defined
```

---

### 2. Variable declared with `var`
```js
console.log(y);
var y = 1;
```
**Output:**
```text
undefined
```

---

### 3. Assignment before declaration with `var`
```js
y = 3;
console.log(y);
var y;
```
**Output:**
```text
3
```

---

### 4. Variable declared with `let`
```js
console.log(x);
let x = 1;
```
**Output:**
```text
ReferenceError: Cannot access 'x' before initialization
```
👉 This happens due to the **Temporal Dead Zone (TDZ)**.

---

### 5. Hoisting inside functions
```js
function example() {
    console.log("Value of a in local space: ", a);    
}

console.log("Value of a in global space: ", a);
var a = 1;
example();
```
**Output:**
```text
Value of a in global space:  undefined
Value of a in local space:  1
```

---

### 6. Assignment without `var/let/const`
```js
function hoistingExample() {
    a = 1;
}
hoistingExample();
console.log(a);
```
**Output:**
```text
1
```
👉 Variables assigned without declaration keywords become **global**.

---

### 7. `var` is function-scoped
```js
function example1() {
    var a = 1;
}
example1();
console.log(a);
```
**Output:**
```text
ReferenceError: a is not defined
```
👉 `var` is **function scoped**, so it cannot be accessed outside its function.

---

### 8. Function declarations are hoisted (overwritten)
```js
function a() {
    console.log("1");
}
a();
function a() {
    console.log("2");
}
a();
```
**Output:**
```text
2
2
```
👉 The second declaration overwrites the first one during hoisting.

---

## ⚡ Key Takeaways
- **`var`** declarations are hoisted and initialized with `undefined`.
- **`let`** and **`const`** declarations are hoisted but **not initialized** → they remain in the **Temporal Dead Zone (TDZ)** until execution reaches their declaration.
- **Function declarations** are hoisted completely, and the **latest definition overwrites earlier ones**.
- **Assignments are not hoisted**, only **declarations** are.
- Variables declared without `var/let/const` become **global by default** (not recommended).

---

✅ Understanding hoisting is crucial for debugging and writing predictable JavaScript code.
