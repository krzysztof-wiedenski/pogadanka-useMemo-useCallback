* * *

🧠 `useMemo`: Memoize a **value** (return of a computation)
-----------------------------------------------------------

### ✅ Use Cases

1.  **Expensive Calculations**
    
    *   Example: Computing large dataset summaries (e.g., filtering, sorting, stats).
        
2.  **Derived Data**
    
    *   Example: Filtered list from a large array based on input.
        
3.  **Memoizing Objects/Arrays**
    
    *   Example: Style objects passed to styled components or props.
        

### ❌ Don't Use When

*   The computation is cheap.
    
*   You're fine with recalculating every render.
    

* * *

🪝 `useCallback`: Memoize a **function**
----------------------------------------

### ✅ Use Cases

1.  **Stable References Between Renders**
    
    *   Needed when a function is passed to a child component that uses `React.memo` to avoid unnecessary re-renders.
        
2.  **Event Handlers**
    
    *   Prevents re-creating functions like `onClick`, `onChange`, etc., that are passed to memoized children.
        
3.  **Callback Dependencies**
    
    *   When a callback is needed in `useEffect` or inside another hook that depends on the function reference.
        

### ❌ Don't Use When

*   The function isn't passed to memoized children.
    
*   Re-creating the function has no noticeable cost or impact.
    

* * *

🔄 Using `useCallback` + `useMemo` Together
-------------------------------------------

### ✅ Use Cases

1.  **Memoized Function that Returns a Memoized Result**
    
    *   Example: Creating a memoized event handler that internally uses computed values.
        
2.  **Memoizing Configuration Functions**
    
    *   Example: A `getOptions()` function that returns a memoized options object used by a chart or library component.
        
3.  **Nested Callbacks or Derived Event Handlers**
    
    *   When an event handler uses memoized derived data.
        

* * *

🧩 Real-life Use Case Examples
------------------------------

### 🔹 useMemo

```tsx
const sortedItems = useMemo(() => {
  return items.slice().sort((a, b) => a.value - b.value);
}, [items]);

```

### 🔹 useCallback

```tsx
const handleClick = useCallback(() => {
  console.log('Item clicked');
}, []);
```

### 🔹 useCallback + useMemo

```tsx
const expensiveFilteredItems = useMemo(() => {
  return items.filter(item => item.visible);
}, [items]);

const handleItemClick = useCallback((id: number) => {
  const selectedItem = expensiveFilteredItems.find(item => item.id === id);
  console.log(selectedItem);
}, [expensiveFilteredItems]);

```

* * *

🧠 Rule of Thumb
----------------

| Intent    | Hook |
| -------- | ------- |
| Memoize value  | `useMemo`    |
| Memoize function | `useCallback`     |
| Value depends on memoized function    | Use both    |
| Expensive calculation    | `useMemo`   |
| Function passed to child props    | `useCallback`    |
| Derived event handlers or stable logic chains    | Combine both   |
* * *