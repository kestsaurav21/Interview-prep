// 🔹 What are Hooks?
// Hooks are special functions introduced in React 16.8 that allow developers to use state and other React features (like state, lifecycle, and context) without writing class components.


// 🔹 Most Common React Hooks
// 🔑 Basic Hooks
// 1. useState → Manage state in a functional component.
// 2. useEffect → Handle side effects (fetching data, DOM manipulation, subscriptions).
// 3. useContext → Access context values without writing <Context.Consumer>.
// 4. useRef → Persist values across renders / access DOM elements.
// 5. useReducer → Alternative to useState for complex state logic (like Redux-lite).
// 6. useCallback → Memoizes a function so it’s not re-created on every render.
// 7. useMemo → Memoizes a computed value to avoid expensive recalculations.

// Rules for hooks:

//1. Only call Hooks at the top level 


function Counter() {
  // ✅ Good: top-level in a function component
  const [count, setCount] = useState(0);
  // ...
}

function useWindowWidth() {
  // ✅ Good: top-level in a custom Hook
  const [width, setWidth] = useState(window.innerWidth);
  // ...
}

//2. Only call Hooks from React functions 

function FriendList() {
  const [onlineStatus, setOnlineStatus] = useOnlineStatus(); // ✅
}




