
# JavaScript Promises - Interview Questions & Answers

This document covers **JavaScript Promises** interview questions with answers, from basic to advanced, including output-based questions.

---

## 📌 Basic Questions

### Q1. What is a Promise in JavaScript?
A Promise is an object that represents the eventual **completion (fulfilled)** or **failure (rejected)** of an asynchronous operation.

```javascript
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});
```

---

### Q2. What are the different states of a Promise?
1. **Pending** → Initial state.  
2. **Fulfilled** → Operation completed successfully, `resolve()` called.  
3. **Rejected** → Operation failed, `reject()` called.

---

### Q3. How do you create a Promise in JavaScript?
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded!");
  }, 1000);
});
```

---

### Q4. Difference between `resolve` and `reject`?
- **resolve(value):** Marks the Promise as fulfilled, handled by `.then()`.  
- **reject(error):** Marks the Promise as rejected, handled by `.catch()`.  

---

### Q5. How does `.then()` work?
- Handles fulfilled values.  
- Takes two arguments: `onFulfilled` and `onRejected`.  
- Returns a **new Promise** → supports chaining.

---

### Q6. What is `.catch()` used for?
- Handles errors when a Promise is rejected.  
- Can catch errors from anywhere in the Promise chain.

---

### Q7. What is `.finally()` used for?
- Runs **after a Promise is settled**, regardless of success or failure.  
- Typically used for **cleanup tasks**.

---

### Q8. What happens if you call both `resolve()` and `reject()`?
Only the **first call** matters. A Promise can be settled once.  
```javascript
new Promise((resolve, reject) => {
  resolve("Done!");
  reject("Ignored!");
}).then(console.log).catch(console.error);
// Output: Done!
```

---

### Q9. Difference between synchronous and asynchronous code?
- **Synchronous:** Executes one task at a time in order. Blocks further execution.  
- **Asynchronous:** Executes tasks without blocking. Uses callbacks, Promises, or async/await.

---

### Q10. Promises vs Callbacks?
- Callbacks can lead to **callback hell** and messy error handling.  
- Promises provide chaining and better error handling.  

---

## 📌 Intermediate Questions

### Q11. Can you chain multiple `.then()` calls?
Yes. Each `.then()` returns a new Promise.  
```javascript
Promise.resolve(10)
  .then(num => num * 2)
  .then(num => num + 5)
  .then(console.log); // 25
```

---

### Q12. What happens if a Promise is rejected but no `.catch()`?
It causes an **UnhandledPromiseRejection** error.

---

### Q13. Difference between `Promise.all()`, `Promise.race()`, `Promise.any()`, and `Promise.allSettled()`?
- **all()** → Waits for all Promises to succeed, rejects if any fail.  
- **race()** → Returns the result of the first settled Promise.  
- **any()** → Returns the first fulfilled Promise, ignores rejections.  
- **allSettled()** → Returns results of all Promises (fulfilled & rejected).

---

### Q14. How to convert a callback to a Promise?
```javascript
function getData(cb) {
  setTimeout(() => cb(null, "Data"), 1000);
}

// Promisify
function getDataPromise() {
  return new Promise((resolve, reject) => {
    getData((err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
```

---

### Q15. Microtasks vs Macrotasks?
- **Microtasks (Promises):** Executed immediately after the current task.  
- **Macrotasks (setTimeout, setInterval):** Scheduled later in the event loop.

---

## 📌 Advanced Questions

### Q16. Difference between `Promise.resolve()` and `new Promise(resolve => resolve())`?
Both create resolved Promises, but `Promise.resolve()` is shorthand.

---

### Q17. How does error propagation work?
Errors bubble down through `.then()` until caught by `.catch()`.

---

### Q18. Drawbacks of Promises?
- No built-in cancellation.  
- Still require careful chaining to avoid silent failures.

---

### Q19. How do Promises work internally?
- They’re syntactic sugar over callback queues managed by the **event loop**.  
- A Promise transitions from `pending` → `fulfilled`/`rejected` once settled.

---

### Q20. Promises vs async/await?
- **Promises:** Chain with `.then()` and `.catch()`.  
- **async/await:** Makes async code look synchronous, uses `try...catch`.

---

### Q21. Why `try...catch` with async/await?
To handle rejected Promises in a cleaner way.

---

### Q22. Can you cancel a Promise?
No, but you can implement cancellation with **AbortController** or flags.

---

### Q23. Difference between settled, fulfilled, and rejected?
- **Settled:** Either fulfilled or rejected.  
- **Fulfilled:** Successfully completed.  
- **Rejected:** Failed.

---

### Q24. How does chaining handle sync & async values?
Chained `.then()` can return either a value (sync) or a Promise (async). Both are handled seamlessly.

---

### Q25. Debugging Promise errors?
- Use `.catch()` or `try...catch`.  
- Use `Promise.allSettled()` for batch operations.  
- Node.js: Use `unhandledRejection` event listener.

---

## 📌 Output-Based Questions

### Q26.
```javascript
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error("Oops"); })
  .catch(err => 2)
  .then(x => x + 1)
  .then(console.log);
```
**Output:** `3`

---

### Q27.
```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```
**Output:**
```
Start
End
Promise
Timeout
```

---

### Q28.
```javascript
new Promise((resolve, reject) => {
  reject("Error!");
  resolve("Success!");
})
  .then(res => console.log(res))
  .catch(err => console.log(err));
```
**Output:** `Error!`

---

### Q29.
```javascript
Promise.resolve("First")
  .then(res => {
    console.log(res);
    return "Second";
  })
  .then(res => {
    console.log(res);
    return Promise.resolve("Third");
  })
  .then(res => console.log(res));
```
**Output:**
```
First
Second
Third
```

---

### Q30.
```javascript
async function test() {
  return "Hello";
}
test().then(console.log);
```
**Output:** `Hello`

---

✅ This file gives you complete **interview prep** on Promises in JavaScript.
