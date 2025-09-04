# JavaScript Object Copying: Shallow vs Deep Copy

In JavaScript, objects and arrays are reference types. Copying them can be done in two ways: **shallow copy** and **deep copy**.

---

## Overview

In JavaScript, copying objects can be tricky when the objects contain nested objects or arrays.  

- **Shallow Copy**: Copies only the first level of the object. Nested objects still share references.  
- **Deep Copy**: Creates a full copy of the object including all nested objects or arrays, so changes in the copy do not affect the original.  

---

## Shallow Copy

Shallow copy copies only the top-level properties of an object.  

### Using Spread Operator

```javascript
const user = {
    name: 'Saurabh',
    age: 26,
    address: {
        city: "Faridabad",
        state: 'Haryana'
    }
};

const copyUser1 = { ...user };
```

### Using Object.assign()

```javascript
const copyUser2 = Object.assign({}, user);
```

---

## Limitations of Shallow Copy

Modifying nested objects in a shallow copy will also affect the original object because nested objects are still referenced.

```javascript
copyUser1.address.city = 'Dehradun';
copyUser2.address.state = 'Uttarakhand';

console.log("Copy object:", copyUser1);
console.log("Original object:", user);
```

**Output:**

```
Copy object: { name: 'Saurabh', age: 26, address: { city: 'Dehradun', state: 'Uttarakhand' } }
Original object: { name: 'Saurabh', age: 26, address: { city: 'Dehradun', state: 'Uttarakhand' } }
```

> Notice that changes in the copy also reflect in the original object.

---

## Deep Copy

Deep copy creates a completely independent copy of an object, including all nested objects and arrays.

### Custom Deep Copy Function

```javascript
function deepCopy(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }

    if(Array.isArray(obj)){
        return obj.map(item => deepCopy(item));
    }

    let newObj = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepCopy(obj[key]);
        }
    }

    return newObj;
}
```

---

## Example

```javascript
const Person = {
    name: 'Vaibhav',
    age: 26,
    address: {
        city: "Haldwani",
        state: 'Uttarakhand'
    }
};

const newUser = deepCopy(Person);
newUser.age = 24;
newUser.address.city = 'Gurgaon';
newUser.address.state = 'Haryana';

console.log("Original Object: ", Person);
console.log("Deep Copy Object: ", newUser);
```

**Output:**

```
Original Object: { name: 'Vaibhav', age: 26, address: { city: 'Haldwani', state: 'Uttarakhand' } }
Deep Copy Object: { name: 'Vaibhav', age: 24, address: { city: 'Gurgaon', state: 'Haryana' } }
```

---

### Methods for Deep Copy:
- `structuredClone(obj)` ✅ (modern & reliable)
- `JSON.parse(JSON.stringify(obj))` ⚠️ (works but loses methods, `Date`, `Map`, etc.)
- Libraries like **Lodash**: `_.cloneDeep(obj)`

## Summary

- **Shallow Copy**: Only first-level properties are copied, nested objects share references.  
- **Deep Copy**: Copies all levels of nested objects and arrays, creating fully independent objects.  

This demonstrates the importance of deep copying when dealing with nested objects in JavaScript.

