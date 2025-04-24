import React from "react";

const ButtonActions: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => setCount((c) => c + 1), []);

  return <button onClick={handleClick}>Count: {count}</button>;
};

export default ButtonActions;
