import React, { useCallback, useState } from "react";

// useCallback
const StableClickHandler: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};
