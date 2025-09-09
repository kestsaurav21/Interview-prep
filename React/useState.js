// ------------------------------ useState() -----------------------------------------
// useState() - The useState hook is used to manage state in functional components.
// It returns an array with two values: 
// (1) the current state variable, and 
// (2) a function (setter) to update that state variable.

// Syntax:    const [count, setCount] = useState(0); // state variable

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // state variable

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}




// ✅ Key points to remember about useState:

// You can initialize state with a value: const [count, setCount] = useState(0).

// The setter function (setCount) replaces the value, it doesn’t merge objects like setState in class components.

// Updating state triggers a re-render of the component.