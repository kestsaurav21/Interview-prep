# Shallow Copy vs Deep Copy in JavaScript

In JavaScript, objects and arrays are reference types. Copying them can be done in two ways: **shallow copy** and **deep copy**.

---

## 🔹 Shallow Copy
A **shallow copy** duplicates an object, but only the **first level**. Nested objects/arrays are still **referenced**, not cloned.

### Example:
```js
const original = {
  name: "Saurabh",
  address: { city: "Kotdwar" }
};

// Shallow copy
const shallowCopy = { ...original };

shallowCopy.name = "Raj";
shallowCopy.address.city = "Delhi";

console.log(original.name);          // "Saurabh" ✅ unaffected
console.log(original.address.city);  // "Delhi" ❌ changed (reference shared)
```

### Methods for Shallow Copy:
- Spread operator: `{ ...obj }`
- `Object.assign({}, obj)`
- Arrays: `slice()`, `concat()`, `[...arr]`

---

## 🔹 Deep Copy
A **deep copy** creates a **fully independent clone**, including all nested objects and arrays. Modifications don’t affect the original.

### Example:
```js
const original = {
  name: "Saurabh",
  address: { city: "Kotdwar" }
};

// Deep copy
const deepCopy = structuredClone(original);

deepCopy.name = "Raj";
deepCopy.address.city = "Delhi";

console.log(original.name);          // "Saurabh" ✅ unaffected
console.log(original.address.city);  // "Kotdwar" ✅ unaffected
```

### Methods for Deep Copy:
- `structuredClone(obj)` ✅ (modern & reliable)
- `JSON.parse(JSON.stringify(obj))` ⚠️ (works but loses methods, `Date`, `Map`, etc.)
- Libraries like **Lodash**: `_.cloneDeep(obj)`

---

## 🔹 Quick Comparison Table

| Feature            | Shallow Copy | Deep Copy |
|--------------------|--------------|-----------|
| Top-level props    | ✅ Copied    | ✅ Copied |
| Nested objects     | ❌ Referenced | ✅ Copied |
| Independent data?  | ❌ No        | ✅ Yes    |
| Methods preserved? | ✅ Yes       | ⚠️ Not always (depends on method) |

---

## ✅ Summary
- Use **shallow copy** for simple objects without nested structures.
- Use **deep copy** when you need complete independence from the original.

🚀 Deep copy ensures your data stays safe from unintended side-effects.
