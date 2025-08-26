# Optional Chaining in JavaScript

Optional chaining (`?.`) is a feature in **JavaScript** that lets you safely access deeply nested properties of an object **without having to manually check** if each property exists. If the value before `?.` is `null` or `undefined`, the expression short-circuits and evaluates to `undefined` instead of throwing an error.

---

## 🔹 Syntax
```js
object?.property
object?.[expression]
object?.method?.()
```

---

## 🔹 Example 1: Without Optional Chaining
```js
const user = {
  name: "Saurabh",
  address: {
    city: "Kotdwar",
  }
};

console.log(user.address.city); // "Kotdwar"
console.log(user.profile.bio);  // ❌ Error: Cannot read properties of undefined
```

---

## 🔹 Example 2: With Optional Chaining
```js
console.log(user?.address?.city);   // "Kotdwar"
console.log(user?.profile?.bio);    // ✅ undefined (no error)
```

---

## 🔹 Example 3: Optional Chaining with Functions
```js
const user = {
  greet: () => "Hello!"
};

console.log(user.greet?.());    // "Hello!"
console.log(user.sayHi?.());    // undefined (no error)
```

---

## ✅ Benefits
- Prevents runtime errors when accessing nested objects.
- Makes code cleaner (no need for multiple `&&` checks).
- Useful when working with API responses where some data might be missing.

---

## 🔹 Related: Nullish Coalescing (`??`)
Optional chaining often pairs well with **nullish coalescing**, which provides a default value if something is `null` or `undefined`:

```js
console.log(user?.profile?.bio ?? "No bio available");
// Output: "No bio available"
```

---

🚀 With optional chaining, you can write **safer and cleaner JavaScript code**!