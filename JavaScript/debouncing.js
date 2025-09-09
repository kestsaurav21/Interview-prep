// Debouncing:

// Debouncing is an performance optimization technique that ensures that a function runs only after a certain period of inactivity.

// If events keeps firing, the timer reset.
// The function executes only when the user stops triggering it for the given delay.



// 🔹 Example without Debouncing

// Imagine you have a search bar that calls an API every time a user types:

function fetchData(query){
    console.log('fetching data for:', query);
}


document.getElementById('search').addEventListener('input', (e) => {
    fetchData(e.target.value); // fires for every keystroke
})


// ⚠️ Problem: If you type "apple", it makes 5 API calls (a, ap, app, appl, apple) - this causes performance issue.



// 🔹 With Debouncing

// We wrap the function in a debouncer so it only runs after the user stops typing for (say) 500ms:

    // <input id="search" type="text" placeholder="Search here...">


function debounce(fn, delay){
    let timer;

    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}



function fetchData(query){
  console.log("Fetching data for:", query);
}

const debouncedFetch = debounce(fetchData, 2000)


document.getElementById('search').addEventListener('input', (e) => {
    debouncedFetch(e.target.value);
})
















