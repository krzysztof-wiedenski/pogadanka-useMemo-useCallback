import React from "react";

const StableClickHandler: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => setCount((c) => c + 1), []);

  return <button onClick={increment}>Count: {count}</button>;
};

export default StableClickHandler;
