# Currying in JavaScript

In JavaScript, **Currying** is a technique where a function with
multiple arguments is broken down into a series of nested functions,
with each function taking only one argument.

------------------------------------------------------------------------

## Example Without Currying

Suppose we have a function `add()` which takes multiple arguments and
returns the sum of those arguments:

``` javascript
function add(a, b, c) {
    return a + b + c;
}

const ans = add(2, 5, 7);
console.log(ans); // 14
```

------------------------------------------------------------------------

## Applying the Currying Technique

Now, let's apply currying to the same function:

``` javascript
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(curryAdd(10)(5)(2)); // 17
```

------------------------------------------------------------------------

## ✅ Key Takeaway

-   Currying transforms a function with many parameters into a chain
    of functions that each take **one parameter**.
-   It is useful for **reusability, partial application, and cleaner
    functional programming** patterns.
