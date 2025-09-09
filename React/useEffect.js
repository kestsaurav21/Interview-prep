// ------------------------------ useEffect() -----------------------------------------

// useEffect() - The useEffect hook is used to perform side effects in functional components.
// Side effects task like -> data fetching using API, updating the DOM or setting timers
// useEffect takes two arguments:
//1. a callback function
//2. dependency array(which is optional) that controls when the effect runs

//

import { useState, useEffect } from "react";

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // ✅ componentDidMount
  useEffect(() => {
    console.log("Component mounted");
  }, []); // empty dependency → run once

  // ✅ componentDidUpdate
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]); // run only when 'count' changes

  // ✅ componentWillUnmount
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running interval...");
    }, 1000);

    // cleanup (unmount)
    return () => {
      clearInterval(timer);
      console.log("Component will unmount");
    };
  }, []); // setup once, cleanup on unmount

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}


