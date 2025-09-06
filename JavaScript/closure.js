//Closure:

// Closure is a combination of functions bundled together with its lexical environment.

//                                          OR

//Closure is a function that has access to the variable in its parent scope , even after the parent function is returned

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Count:", count);
  }

  return inner;
}

const closureExample = outer();
closureExample(); // Count: 1
closureExample(); // Count: 2
closureExample(); // Count: 3

//How the Closure works?
// 1. Defining a Function: You define a function inside another function, where the inner function accesses one or more variables from the outer function's scope.
// 2. Execution Context: When the outer function is called, it creates an execution context, which includes variables and their values.
// 3. Inner Function: The inner function captures references to the variables it needs from the outer function's execution context.
// 4. Outer Function Returns: The outer function may return the inner function as a value.
// 5. Accessing Variables: Even after the outer function has completed execution, the inner function (closure) can still access and use the variables it captured from the outer function's scope.
