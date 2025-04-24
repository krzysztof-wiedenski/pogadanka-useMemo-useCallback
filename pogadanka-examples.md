* * *

🧠 `useMemo` – Memoize Computed Values
--------------------------------------

1.  **Expensive Math**  
    Calculating a large Fibonacci or factorial value.
    
2.  **Filtered List**  
    Filter a list of users/items based on a search query.
    
3.  **Sorted List**  
    Sorting a large dataset based on selected column.
    
4.  **Pagination Slice**  
    Calculating current page slice of items from a dataset.
    
5.  **Form Validation**  
    Compute validation errors only when inputs change.
    
6.  **Theme Style Generator**  
    Dynamic style object based on dark/light theme.
    
7.  **Performance Metrics**  
    Derive average, max, or min from analytics data.
    
8.  **Unique Categories**  
    Extracting unique values from a dataset (e.g. tags).
    
9.  **Data Transformation**  
    Transforming raw API data for charts.
    
10.  **Price Calculations**  
    Calculate subtotal/total from cart items and quantities.
    

* * *

🪝 `useCallback` – Memoize Functions
------------------------------------

1.  **Input Handlers**  
    `onChange`, `onBlur`, etc., reused in form fields.
    
2.  **Button Actions**  
    Memoized `onClick` to avoid re-renders in child.
    
3.  **Child Prop Callback**  
    Passing stable `onSelect`, `onRemove`, etc., to memoized children.
    
4.  **Form Submit**  
    Stable `handleSubmit` function used across re-renders.
    
5.  **Ref Callback**  
    Stable callback to attach/detach a DOM ref.
    
6.  **Set Timeout**  
    Delay-triggered actions in a stable function.
    
7.  **Keyboard Shortcuts**  
    Stable key listeners using `useEffect`.
    
8.  **Custom Hook Triggers**  
    Memoized functions passed to hooks that use them as deps.
    
9.  **Navigation Handlers**  
    Navigate or redirect actions from parent to child.
    
10.  **Undo/Redo Handler**  
    Used in collaborative or creative tools.
    

* * *

🔄 Combined: `useMemo` + `useCallback`
--------------------------------------

1.  **Filtered List + Item Click**  
    Filter users (memoized) → handle click using that list.
    
2.  **Sorted List + Sort Handler**  
    Sorted items + stable toggle sort callback.
    
3.  **Dynamic Filters + Submit**  
    Memoize filters object + useCallback for submit.
    
4.  **Search Index + Lookup Handler**  
    Memoized lookup map + onSearch function.
    
5.  **Cart Total + Add/Remove Handlers**  
    Memoized totals + stable `addItem`/`removeItem`.
    
6.  **UI Config + Render Handler**  
    Memoized UI config + render callback passed to children.
    
7.  **Theme Props + Toggle Handler**  
    Dynamic style object + stable theme toggle function.
    
8.  **Graph Data + Event Bindings**  
    Memoized graph data + callbacks on node click/hover.
    
9.  **Visible Elements + Action Handler**  
    Filtered visible elements + stable action (e.g., highlight).
    
10.  **Form State + Handler**  
    Memoized derived form state + memoized submit/save.
    

* * *