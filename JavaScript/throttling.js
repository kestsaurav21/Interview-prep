//
// Throttling ensures a function runs at most once in a given time interval, no matter how many times an event fires.

// If events fire faster than the interval → extra calls are ignored.

// Function runs on a fixed schedule (e.g., every 1000ms).

// 👉 Great for performance when dealing with events like:

// scroll

// resize

// rapid click or mousemove



{/* <button id="submitBtn">Submit</button> */}


  function throttle(fn, delay) {
    let last = 0;

    return function (...args) {
      const now = Date.now();
      if (now - last >= delay) {
        fn.apply(this, args);
        last = now;
      }
    };
  }

  function handleSubmit() {
    console.log("Form submitted at:", new Date().toLocaleTimeString());
  }

  const throttledSubmit = throttle(handleSubmit, 2000);

  document.getElementById("submitBtn").addEventListener("click", throttledSubmit);